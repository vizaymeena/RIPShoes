import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

export const AdminDashboard = () => {
  const [purchases, setPurchases] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser || loggedInUser.role !== 'admin') {
      alert('Access Denied! Only Admin can view this page.');
      return;
    }
    fetchPurchases();
  }, []);

  const fetchPurchases = async () => {
    try {
      const response = await axios.get('http://localhost:3000/purchases');
      setPurchases(response.data);
    } catch (error) {
      console.error('Error fetching purchases:', error);
      setError('Failed to fetch purchases. Please try again later.');
    }
  };

  return (
    <div className="dashboard-container">
      <h2>All User Purchases (Admin View)</h2>
      
      {error && <p className="error">{error}</p>}
      
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
