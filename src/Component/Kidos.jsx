import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Images
import Kid2 from "../assets/Kidos/kidu1.jpg";
import Kid3 from "../assets/Kidos/kidu2.jpg";
import Kid4 from "../assets/Kidos/kid3.jpg";

//
import Dkid1 from '../assets/Kidos/Dkid1.jpg'  
import Dkid2 from '../assets/Kidos/Dkid2.jpg'  
import Dkid3 from '../assets/Kidos/Dkid3.jpg'  
import Dkid4 from '../assets/Kidos/Dkid4.jpg'
import Dkid5 from '../assets/Kidos/Dkid5.jpg'  





// Css
import './Component.css';

export let KidosSection = () => {
    let navigate = useNavigate();
    let [selectedSize, setSelectedSize] = useState({});

  const shoes = [
    { id: 1, name: "Sporty Sneakers", price: 1200, sizes: ["5", "6", "7", "8"], image: Kid2 },
    { id: 2, name: "Casual Comfort", price: 900, sizes: ["6", "7", "8", "9"], image: Kid3 },
    { id: 3, name: "Classic Sandals", price: 1100, sizes: ["5", "6", "7"], image: Kid4 },
    { id: 3, name: "Classic Sandals", price: 1900, sizes: ["5", "6", "7"], image: Dkid1 },
    { id: 3, name: "Classic Sandals", price: 1200, sizes: ["5", "6", "7"], image: Dkid2 },
    { id: 3, name: "Classic Sandals", price: 900, sizes: ["5", "6", "7"], image: Dkid3 },
    { id: 3, name: "Classic Sandals", price: 1500, sizes: ["5", "6", "7"], image: Dkid4 },
    { id: 3, name: "Classic Sandals", price: 2000, sizes: ["5", "6", "7"], image: Dkid5 }

  ];

  // Handle Size Change
  let handleSizeChange = (shoeId, size) => {
    setSelectedSize((prev) => ({ ...prev, [shoeId]: size }));
  };

  // Handle Buy Now
  let handleBuyNow = (shoe) => {
    let isLoggedIn = localStorage.getItem('loggedInUser')
    if (isLoggedIn) {
      navigate('/receipt', {
        state: {
          shoeName: shoe.name,
          price: shoe.price,
          shoeSize: size,
        }
      });
    } 
    else {
      
      sessionStorage.setItem("pendingPurchase", JSON.stringify({
        shoeName: shoe.name,
        price: shoe.price,
        shoeSize: size,
      }));
  
      alert("Please login first.");

      navigate('/login');
    }
  }
   

  return (
    <section className="kidos-section">
      <h2 className='kidosheading'>Trendy & Comfortable Kids' Shoes</h2>
      <div className="KidContainer">
        {shoes.map((shoe) => (
          <div className="kidshoeCard" key={shoe.id}>
            <img src={shoe.image} alt={shoe.name} loading="lazy" />
            <h3>{shoe.name}</h3>
            <p>Price: ₹{shoe.price}</p>

            {/* Shoe Size Selection */}
            <label>Shoe Size:</label>
            <select className='ShoeSize' onChange={(e) => handleSizeChange(shoe.id, e.target.value)} value={selectedSize[shoe.id] || shoe.sizes[0]}>
              {shoe.sizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>

            {/* Buy Now Button */}
            <button onClick={() => handleBuyNow(shoe)}>Shop Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KidosSection;
