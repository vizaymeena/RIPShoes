import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Table.css'; 


let EditByAdmin = () => {
    let location = useLocation()
    let navigate = useNavigate()
    let userData = location.state
  
    let [formData, setFormData] = useState({
      name: '',
      email: '',
      contact: '',
      address: '',
      quantity: '',
    });
  
    useEffect(() => {
      if (userData) {
        setFormData({
          name: userData.name,
          email: userData.email,
          contact: userData.contact || '',
          address: userData.address || '',
          quantity: userData.quantity || '',
        });
      }
    }, [userData]);
  
    let handleChange = (e) => {
      let { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }))
    };
  
    let handleSubmit = (e) => {
      e.preventDefault()
  
      axios.put(`http://localhost:3000/purchases/${userData.id}`, formData)
        .then(() => {
          alert("User updated successfully!")
          navigate('/Admindasboard')
        })
        
    };
  
    return (
      <>
      <div className="formContainer">
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit} className="editForm">
          {Object.keys(formData).map((field) => (
            <div className="formGroup" key={field}>
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
              <input
                name={field}
                type={field === "quantity" ? "number" : "text"}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button type="submit" className="submitBtn">Update</button>
        </form>
      </div>
      </>
    );
  };
  
  export default EditByAdmin;
  