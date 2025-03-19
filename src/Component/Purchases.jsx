import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Table.css';
import { useNavigate } from 'react-router-dom';

export let UserPurchases = () => {
  const [purchases, setPurchases] = useState([]);
  const userEmail = localStorage.getItem('userEmail') || '';
  const navigate = useNavigate();

  // Fetch Data from JSON Server
  const fetchData = () => {
    axios.get('http://localhost:3000/purchases')
      .then((response) => {
        setPurchases(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle Delete
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/purchases/${id}`)
      .then(() => {
        setPurchases((prevPurchases) =>
          prevPurchases.filter((purchase) => purchase?.id !== id)
        );
        alert("Purchase deleted successfully!");
      })
      
  };

  // Navigate to Edit Form
  const handleEdit = (purchase) => {
    if (purchase) {
      navigate('/EditPurchase', { state: purchase });
    } else {
      alert('Purchase data not found');
    }
  };

  // Filter Data Based on Logged-in Email
  const filteredPurchases = purchases.filter((purchase) => purchase?.email === userEmail);

  return (
    <div className="purchaseContainer">
      <h2>Your Purchases</h2>
      {filteredPurchases.length > 0 ? (
        <table className="purchaseTable">
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPurchases.map((purchase, index) => (
              <tr key={index}>
                <td>{purchase?.name}</td>
                <td>{purchase?.email}</td>
                <td>{purchase?.shoeName}</td>
                <td>{purchase?.shoeSize}</td>
                <td>{purchase?.quantity}</td>
                <td>{purchase?.contact}</td>
                <td>{purchase?.address}</td>
                <td>{purchase?.price}</td>
                <td className='Buttons'>
                  <button className='editButton' onClick={() => handleEdit(purchase)}>Edit</button>
                  <button className='cancelButton' onClick={() => handleDelete(purchase?.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="noData">No purchases found for your account</p>
      )}
    </div>
  );
};
