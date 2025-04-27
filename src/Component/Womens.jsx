import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Component.css";
import ws1 from '../assets/Images/Heels.jpg';
import ws2 from '../assets/Images/Ws8.jpg';
import ws3 from '../assets/Images/Ws4.jpg';
import ws5 from '../assets/Images/Ws5.jpg';
import ws6 from '../assets/Images/Ws6.jpg';
import ws7 from '../assets/Images/Ws7.jpg';

export default function WomenShoe() {
  let navigate = useNavigate();
  let [selectedSize, setSelectedSize] = useState({});

  let shoes = [
    { id: 1, name: "Stylish Heels", price: 11120, colors: ["Red", "Black"], sizes: ["6", "7", "8"], image: ws1 },
    { id: 2, name: "Casual Sneakers", price: 9090, colors: ["White", "Blue"], sizes: ["6", "7", "8", "9"], image: ws2 },
    { id: 3, name: "Elegant Flats", price: 8000, colors: ["Beige", "Brown"], sizes: ["5", "6", "7"], image: ws3 },
    { id: 4, name: "Sporty Trainers", price: 11110, colors: ["Pink", "Gray"], sizes: ["6", "7", "8", "9"], image: ws3 },
    { id: 5, name: "Chic Sandals", price: 7070, colors: ["Gold", "Silver"], sizes: ["5", "6", "7", "8"], image: ws5 },
    { id: 6, name: "Comfy Loafers", price: 11100, colors: ["Black", "Navy"], sizes: ["6", "7", "8"], image: ws6 },
    { id: 7, name: "Trendy Boots", price: 15250, colors: ["Brown", "Black"], sizes: ["6", "7", "8", "9"], image: ws7 },
  ];

  let handleSelectChange = (shoeId, type, value) => {
    setSelectedSize((prev) => ({
      ...prev,
      [shoeId]: { ...prev[shoeId], [type]: value },
    }));
  };

  let handleBuyNow = (shoe) => {
   
    
    let isLoggedIn = localStorage.getItem('loggedInUser');
    let size = selectedSize[shoe.id] || shoe.sizes[0];

    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));  
  
    if (isLoggedIn) {
      navigate('/receipt', {
        state: {
          name:loggedInUser.name,
          email:loggedInUser.email,
          shoeName: shoe.name,
          price: shoe.price,
          shoeSize: size,

        }
      });
    } else {
        sessionStorage.setItem("pendingPurchase", JSON.stringify({
        shoeName: shoe.name,
        price: shoe.price,
        shoeSize: size
      }));
  
      alert("Please login first.");

      navigate('/login');
    }

   
  };

  return (
    <>
      <h1 className="womenHeading">Womens</h1>
      <div className="grid-container">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="card Womencard">
            <img src={shoe.image} alt={shoe.name} className="shoe-image" />
            <h3>{shoe.name}</h3>
            <p className="price">{shoe.price}</p>
            <div className="options">

              {/* Select Shoe Size */}
              <label>Size: </label>
              <select className='ShoeSize'
                onChange={(e) => handleSelectChange(shoe.id, 'size', e.target.value)}
                value={selectedSize[shoe.id]?.size || shoe.sizes[0]}
              >
                {shoe.sizes.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>

              {/* Select Shoe Color */}
              <label>Color: </label>
              <select
                onChange={(e) => handleSelectChange(shoe.id, 'color', e.target.value)}
                value={selectedSize[shoe.id]?.color || shoe.colors[0]}
              >
                {shoe.colors.map((color) => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
            <button className="womenBuy" onClick={() => handleBuyNow(shoe)}>Buy Now</button>
          </div>
        ))}
      </div>
    </>
  );
}
