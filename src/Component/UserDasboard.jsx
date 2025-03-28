import React, { useEffect, useState } from 'react';
import axios from 'axios';

export let UserDashboard = () => {
  const [purchases, setPurchases] = useState([]);
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  useEffect(() => {
    if (!loggedInUser) {
      alert('Please login first.');
      return;
    }
    fetchUserPurchases();
  }, []);

  const fetchUserPurchases =  () => {
    
      const res =  axios.get('http://localhost:3000/purchases');
      const userPurchases = res.data.filter((p) => p.email === loggedInUser.email);
      setPurchases(userPurchases)
   
  };

  return (
    <div className="dashboard-container">
      <h2>Your Purchases</h2>
      {purchases.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Shoe Name</th>
              <th>Shoe Size</th>
              <th>Quantity</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((bought, index) => (
              <tr key={index}>
                <td>{bought?.name}</td>
                <td>{bought?.email}</td>
                <td>{bought?.shoeName}</td>
                <td>{bought?.shoeSize}</td>
                <td>{bought?.quantity}</td>
                <td>{bought?.contact}</td>
                <td>{bought?.address}</td>
                <td>{bought?.price || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No purchases found for your account.</p>
      )}
    </div>
  );
};
