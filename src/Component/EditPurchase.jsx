import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Table.css'

export let EditForm = () => {
  let location = useLocation();
  let navigate = useNavigate();
  let { state } = location;
  
  let [formData, setFormData] = useState(state);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/purchases/${formData.id}`, formData);
      alert('Product details updated successfully!');
      navigate('/purchases');
    } catch (error) {
      console.error('Error updating data:', error);
      alert('Failed to update product details');
    }
  };

  return (
    <div className="form-container">
      <h2>Edit Product Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Shoe Name</label>
          <input type="text" name="shoeName" value={formData.shoeName} onChange={handleChange}  readOnly/>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Shoe Size</label>
            <input type="number" name="shoeSize" value={formData.shoeSize} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label>Contact</label>
          <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Price (₹)</label>
          <input type="text" name="price" value={formData.price} onChange={handleChange} readOnly />
        </div>

        <button type="submit" className="update-btn">Update</button>
      </form>
    </div>
  )
}


