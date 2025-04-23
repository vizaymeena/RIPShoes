import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Component.css';

export const Money = () => {
  let location = useLocation();
  let navigate = useNavigate();

  console.log(location.state)

  let { shoeName, shoeSize, price: basePrice } = location.state || {};
  
  // let {name,email}= location.state || {}
  let name = (location.state && location.state.name) || localStorage.getItem("name") || "";
  let email = (location.state && location.state.email) || localStorage.getItem("email") || "";

  // console.log(name)

  
  let [fetch, setFetch] = useState({
    name,
    email,
    shoeName: shoeName || '',
    shoeSize: shoeSize || '',
    quantity: 1,
    contact: '',
    address: '',
    price: basePrice || 0, 
  });
  const [contactError, setContactError] = useState('');


  // calculate totall price based on quantity 
  useEffect(() => {
    if (fetch.quantity && basePrice) {
      let calculatedPrice = basePrice * fetch.quantity;
      setFetch(prev => ({
        ...prev,
        price: calculatedPrice,
      }));
      
    }
  }, [fetch.quantity, basePrice]);


  // Handle input changes for all fields
  let handleInput = (e) => {
    let { name, value } = e.target;

    if (name === 'quantity') {
      let qty = value;
      
      if (value === '' || (qty >= 1 && qty <= 10)) {
        setFetch(prev => ({ ...prev, quantity: value === '' ? '' : qty }));
      }
    } else {
      setFetch(prev => ({ ...prev, [name]: value }));
    }
  };

  // submit form function
  const BuyReceipt = (e) => {
    e.preventDefault();
  
    // Contact validation
    const contact = fetch.contact.trim();
    const phoneRegex = /^[6-9]\d{9}$/;
  
    if (!contact) {
      setContactError("Contact field cannot be empty");
      return;
    }
  
    if (!/^\d+$/.test(contact)) {
      setContactError("Contact number must contain only digits.");
      return;
    }
  
    if (!phoneRegex.test(contact)) {
      setContactError("Contact number must starts with 9, 8, 7, or 6 and be 10 digits.");
      return;
    }
  
    setContactError("")
  
    // Quantity validation
    if (!fetch.quantity || fetch.quantity < 1 || fetch.quantity > 10) {
      alert("Please enter a valid quantity between 1 and 10.");
      return
    }
  
    // Submit form
    axios.post('http://localhost:3000/purchases', fetch)
      .then(() => {
        alert("order has been placed successfully")
        navigate('/Purchases')
      });
  };
  

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
  <div style={{ width: "100%", maxWidth: "500px", background: "#fff", padding: "2rem", borderRadius: "12px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
    <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Payment</h2>

    <form onSubmit={BuyReceipt}>
      <div>
        <label>Full Name</label>
        <input type="text" name="name" value={fetch.name} onChange={handleInput} readOnly />
      </div>

      <div>
        <label>Email</label>
        <input type="email" name="email" value={fetch.email} onChange={handleInput} readOnly />
      </div>

      <div>
        <label>Contact Number</label>
        <input type="text" name="contact" placeholder="9876543210" value={fetch.contact} onChange={handleInput}/>
        {contactError && <p style={{ color: "red", marginTop: "5px" }}>{contactError}</p>}
      </div>

      <div>
        <label>Address</label>
        <textarea name="address" placeholder="Full delivery address..." value={fetch.address} rows="3" onChange={handleInput} required />
      </div>

      <div>
        <label>Quantity (1-10)</label>
        <input type="number" name="quantity" min="1" max="10" value={fetch.quantity} onChange={handleInput} required />
      </div>

      <button type="submit" className="buy-btn" style={{ width: "100%", padding: "0.75rem", marginTop: "1rem" }}>Place Order</button>

      <div style={{ marginTop: "2rem", borderTop: "1px solid #ddd", paddingTop: "1rem" }}>
        <h3 style={{ marginBottom: "1rem" }}>Order Details</h3>
        <p><strong>User:</strong> {fetch.name}</p>
        <p><strong>Email:</strong> {fetch.email}</p>
        <p><strong>Shoe:</strong> {fetch.shoeName}</p>
        <p><strong>Size:</strong> {fetch.shoeSize}</p>
        <p><strong>Quantity:</strong> {fetch.quantity}</p>
        <p><strong>Total Price:</strong> ₹{parseFloat(fetch.price).toFixed(2)}</p>
      </div>
    </form>
  </div>
</div>

  );
};
