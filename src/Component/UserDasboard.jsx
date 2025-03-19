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

  const fetchUserPurchases = async () => {
    try {
      const response = await axios.get('http://localhost:3000/purchases');
      const userPurchases = response.data.filter((p) => p.email === loggedInUser.email);
      setPurchases(userPurchases);
    } catch (error) {
      console.error('Error fetching purchases:', error);
    }
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
            {purchases.map((purchase, index) => (
              <tr key={index}>
                <td>{purchase?.name}</td>
                <td>{purchase?.email}</td>
                <td>{purchase?.shoeName}</td>
                <td>{purchase?.shoeSize}</td>
                <td>{purchase?.quantity}</td>
                <td>{purchase?.contact}</td>
                <td>{purchase?.address}</td>
                <td>{purchase?.price || 'N/A'}</td>
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
