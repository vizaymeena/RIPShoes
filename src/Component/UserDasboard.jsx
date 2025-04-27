import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css'

export let UserDashboard = () => {
  let [purchases, setPurchases] = useState([]);
  let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  useEffect(() => {

    if (!loggedInUser) {
      alert('Please login first.');
      return;
    }

    let userPurchases = async () => {
     
        let res = await axios.get('http://localhost:3000/purchases');
        let userPurchases = res.data.filter(
          (p) => p.email === loggedInUser.email
        )
        setPurchases(userPurchases);
      } 

    userPurchases();
  }, [loggedInUser]);

  return (
    <div className="dContainer">
      <h2 className="dHeading">Your Purchases</h2>
      {purchases.length > 0 ? (
        <div className="cGrid">
          {purchases.map((item, index) => (
            <div key={index} className="pCard">
              <h3 className="sName">{item.shoeName}</h3>
              <p><strong>Size:</strong> {item.shoeSize}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>
              <p><strong>Price:</strong> ₹{item.price || 'N/A'}</p>
              <hr />
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Contact:</strong> {item.contact}</p>
              <p><strong>Address:</strong> {item.address}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="nPurchases">No purchases found for your account.</p>
      )}
    </div>
  );
};
