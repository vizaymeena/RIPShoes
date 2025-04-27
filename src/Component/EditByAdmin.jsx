import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Table.css'

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
  })

  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name,
        email: userData.email,
        contact: userData.contact || '',
        address: userData.address || '',
        quantity: userData.quantity || '',
      })
    }
  }, [userData]);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  let handleSubmit = (e) => {
    e.preventDefault()

    let conRule = ['9', '8', '7', '6']
    let firstDigit = conRule[0]

    let name = formData.name; // Validate formData, not userData
    let uppLowCase = /^[A-Za-z\s ]+$/.test(name)
    let nameLength = name.length >= 4 && name.length <= 16

    // Validation
    if (!name) {
      return alert("Name cannot be empty")
    } else if (!uppLowCase) {
      return alert('Name cannot be a number, it should be a valid name including characters')
    } else if (!nameLength) {
      return alert("Name must be between 4-16 characters")
    }

    // Email
    if (!formData.email) {
      return alert('Email cannot be empty');
    } else if (!formData.email.includes('@') || !formData.email.endsWith('.com')) {
      return alert('Email should be a valid format and contain "@" and ".com"')
    }

    // Contact
    if (isNaN(formData.contact)) {
      return alert("Contact must be a number")
    } else if (formData.contact.length !== 10) {
      return alert('Number should be of 10 digits')
    } else if (!conRule.includes(formData.contact[0])) {
      return alert('Number should start with 9, 8, 7, or 6')
    }

    // Quantity
    if (formData.quantity <= 0 || isNaN(formData.quantity)) {
      return alert("Quantity must be a positive number")
    }

    // Put if all condition true
    axios
      .put(`http://localhost:3000/purchases/${userData.id}`, formData)
      .then(() => {
        alert("User updated successfully!")
        navigate('/Admindasboard')
      })
      .catch((err) => {
        console.error(err)
        alert('Something went wrong while updating.')
      })
  }

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
              />
            </div>
          ))}
          <button type="submit" className="submitBtn">Update</button>
        </form>
      </div>
    </>
  )
}

export default EditByAdmin;
