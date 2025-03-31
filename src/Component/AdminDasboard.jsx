import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

export const AdminDashboard = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser || loggedInUser.role !== 'admin') {
      alert('Access Denied! Only Admin can view this page.');
      return;
    }
    fetchPurchases();
  }, []);

  const fetchPurchases = () => {
    
     axios.get('http://localhost:3000/purchases')
      .then((res) => {
        // Ensure that the data is an array
        if (Array.isArray(res.data)) {
          setPurchases(res.data);
        } else {
          console.error('Error: Purchases data is not an array.');
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch
        console.error('Error fetching purchases:', error);
      });
  };

  return (
    <div className="dashboard-container">
      <h2>All User Purchases (Admin View)</h2>
      {purchases.length > 0 ? (
        <div className="table-wrapper">
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
                  <td>{purchase?.name || 'N/A'}</td>
                  <td>{purchase?.email || 'N/A'}</td>
                  <td>{purchase?.shoeName || 'N/A'}</td>
                  <td>{purchase?.shoeSize || 'N/A'}</td>
                  <td>{purchase?.quantity || 'N/A'}</td>
                  <td>{purchase?.contact || 'N/A'}</td>
                  <td>{purchase?.address || 'N/A'}</td>
                  <td>{purchase?.price || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No purchases available.</p>
      )}
    </div>
  );
};
