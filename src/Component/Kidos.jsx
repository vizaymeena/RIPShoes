import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Images
import Kid2 from "../assets/Kidos/kidu1.jpg";
import Kid3 from "../assets/Kidos/kidu2.jpg";
import Kid4 from "../assets/Kidos/kid3.jpg";
// Css
import './Component.css';

export const KidosSection = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState({});

  const shoes = [
    { id: 1, name: "Sporty Sneakers", price: 1200, sizes: ["5", "6", "7", "8"], image: Kid2 },
    { id: 2, name: "Casual Comfort", price: 900, sizes: ["6", "7", "8", "9"], image: Kid3 },
    { id: 3, name: "Classic Sandals", price: 1100, sizes: ["5", "6", "7"], image: Kid4 }
  ];

  // Handle Size Change
  const handleSizeChange = (shoeId, size) => {
    setSelectedSize((prev) => ({ ...prev, [shoeId]: size }));
  };

  // Handle Buy Now
  const handleBuyNow = (shoe) => {
    const size = selectedSize[shoe.id] || shoe.sizes[0];
    navigate('/Receipt', {
      state: {
        shoeName: shoe.name,
        shoeSize: size,
        price: shoe.price
      }
    });
  };

  return (
    <section className="kidos-section">
      <h2>Trendy & Comfortable Kids' Shoes</h2>
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
