import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Table.css';
import { useNavigate } from 'react-router-dom';

export let UserPurchases = () => {
  const [purchases, setPurchases] = useState([]);
  const userEmail = localStorage.getItem('userEmail') || '';
  const navigate = useNavigate();


  const fetchData = () => {
    axios.get('http://localhost:3000/purchases')
      .then((res) => {
        if (res.data.length > 0) {
          const lastPurchase = res.data[res.data.length - 1];
          setPurchases([lastPurchase]); // storing last entry as an array
        }
      })
      
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle Delete
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/purchases/${id}`)
      .then(() => {
        setPurchases([]);
        alert("order has been cancelled successfully");
      })
    }
     

  // Navigate to Edit Form
  const handleEdit = (purchase) => {
    navigate('/EditPurchase', { state: purchase });
  };

  return (
    <div className="purchaseContainer">
      <h2>Your Recent Purchase</h2>
      {purchases.length > 0 ? (
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
            {purchases.map((purchase, index) => (
              <tr key={index}>
                <td>{purchase.name}</td>
                <td>{purchase.email}</td>
                <td>{purchase.shoeName}</td>
                <td>{purchase.shoeSize}</td>
                <td>{purchase.quantity}</td>
                <td>{purchase.contact}</td>
                <td>{purchase.address}</td>
                <td>{purchase.price}</td>
                <td className='Buttons'>
                  <button className='editButton' onClick={() => handleEdit(purchase)}>Edit</button>
                  <button className='cancelButton' onClick={() => handleDelete(purchase?.id)}>Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="noData">No recent purchase found for your account</p>
      )}
    </div>
  );
};
