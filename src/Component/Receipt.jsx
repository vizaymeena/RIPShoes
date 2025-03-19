import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Component.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export let Money = () => {
  const location = useLocation();
  const { shoeName, shoeSize, price } = location.state || {};

  let navigation = useNavigate()

  // Form state variable
  let [fetch, setFetch] = useState({
    name: '',
    email: '',
    shoeName: shoeName || '',
    shoeSize: shoeSize || '',
    quantity: 1,
    contact: '',
    address: '',
    price: price || 0,
  });

  // Handle Input Changes
  const handleInput = (e) => {
    const { name, value } = e.target;
     setFetch({...fetch,[name]:value})
  };

  // Finalizing the purchase
  const BuyReceipt = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/purchases', fetch)
      .then(() => alert("Fetch Successfully"))
      .catch((error) => console.error("Error:", error));

      navigation('/Purchases')
  };

  return (
    <div className="receipt_container">
      <div className="receiptForm">
        <h5>Receipt Form</h5>
        <form onSubmit={BuyReceipt}>
          <label>Name</label>
          <input type="text" placeholder="Enter Your Name" name='name' onChange={handleInput} />

          <label>Email</label>
          <input type="text" placeholder="Enter Your Email" name='email' onChange={handleInput} />

          <label>Shoe</label>
          <span>{fetch.shoeName || "Not Available"}</span>

          <label>Shoe Size</label>
          <span>{fetch.shoeSize || "Not Available"}</span>
          
          <label>Quantity (1-10)</label>
          <input type="number" name='quantity'  onChange={handleInput} />

          <label>Contact Number</label>
          <input type="text" placeholder="Enter Contact Number" name='contact' onChange={handleInput} />

          <label>Address</label>
          <input type="text" placeholder="Enter Your Address" name='address' onChange={handleInput} />

          <label>Final Price</label>
          <span>{fetch.price}</span>

          <input className="buyButton" type="submit" value="Buy" />
        </form>
      </div>
    </div>
  );
};
