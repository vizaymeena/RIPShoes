import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Table.css'
import { useNavigate } from 'react-router-dom'

export let UserPurchases = () => {
  let [purchases, setPurchases] = useState([]);
  let userEmail = localStorage.getItem('userEmail') || ''
  let navigate = useNavigate();


  let fetchData = () => {
    axios.get('http://localhost:3000/purchases')
      .then((res) => {
        if (res.data.length > 0) {
          const lastPurchase = res.data[res.data.length - 1]
          setPurchases([lastPurchase]) // storing last entry as an array
        }
      })
      
  };

  useEffect(() => {
    fetchData();
  }, []);

  // handle delete
  let handleDelete = (id) => {
    axios.delete(`http://localhost:3000/purchases/${id}`)
      .then(() => {
        setPurchases([]);
        alert("order has been cancelled successfully")
      })
    }
     

  // navigate to this form
  let handleEdit = (purchase) => {
    navigate('/EditPurchase', { state: purchase })
  };
  let homeButton=(e)=>{
    navigate('/')
  }

  return (
    <div className="purchaseContainer">
      <div><button onClick={homeButton} style={{backgroundColor:'black',padding:'10px',borderRadius:'20px',color:'white'}}>Back to Home</button></div>
    <h2>Your Recent Purchase</h2>
    {purchases.length > 0 ? (
      <div className="cardGrid">
        {purchases.map((purchase, index) => (
          <div className="purchaseCard" key={index}>
            <p><strong>Name:</strong> {purchase.name}</p>
            <p><strong>Email:</strong> {purchase.email}</p>
            <p><strong>Shoe Name:</strong> {purchase.shoeName}</p>
            <p><strong>Shoe Size:</strong> {purchase.shoeSize}</p>
            <p><strong>Quantity:</strong> {purchase.quantity}</p>
            <p><strong>Contact:</strong> {purchase.contact}</p>
            <p><strong>Address:</strong> {purchase.address}</p>
            <p><strong>Price (₹):</strong> {purchase.price}</p>
            <div className="buttonGroup">
              <button className="editButton" onClick={() => handleEdit(purchase)}>Edit</button>
              <button className="cancelButton" onClick={() => handleDelete(purchase?.id)}>Cancel</button>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p className="noData">No recent purchase found for your account</p>
    )}
  </div>
  
  );
};
