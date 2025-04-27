import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

let AdminDashboard = () => {
  let [users, setUsers] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    let loggedUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!loggedUser || loggedUser.role !== 'admin') {
      navigate('/');
      return;
    }

    axios.get('http://localhost:3000/purchases')
      .then(res => setUsers(res.data))
  }, [navigate]);

  // Delete user
  let handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios.delete(`http://localhost:3000/purchases/${id}`)
        .then(() => {
          setUsers(pu => pu.filter(inx => inx.id !== id))
        })
       
    }
  };

  // Edit user
  let handleEdit = (user) => {
    navigate('/EditByAdmin', { state: user });
  };

  return (
    <div className="adminContainer">
      <h2 className="adminTitle">Admin Dashboard</h2>
      <div className="tableWrapper">
        <table className="adminTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Shoe</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.shoeName}</td>
                <td>{user.shoeSize}</td>
                <td>{user.quantity}</td>
                <td>₹{user.price || 0}</td>
                <td>
                  <button className="editBtn" onClick={() => handleEdit(user)}>Edit</button>
                  <button className="deleteBtn" onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
