import { useMemo } from "react";
// Images
import Kid2 from "../assets/Kidos/kidu1.jpg";
import Kid3 from "../assets/Kidos/kidu2.jpg";
import Kid4 from "../assets/Kidos/kid3.jpg";
// Importing Link
import { Link } from "react-router-dom";

// Css
import './Component.css'

import React from 'react';

export const KidosSection = () => {
  const shoes = [
    { id: 1, name: "Sporty Sneakers", price: 1200, image: Kid2 },
    { id: 2, name: "Casual Comfort", price: 900, image: Kid3 },
    { id: 3, name: "Classic Sandals", price: 1100, image: Kid4 }
  ];

  return (
    <section className="kidos-section">
      <h2>Trendy & Comfortable Kids' Shoes</h2>
      <div className="KidContainer">
        {shoes.map(({ id, name, price, image }) => (
          <div className="kidshoeCard" key={id}>
            <img src={image} alt={name} loading="lazy" />
            <h3>{name}</h3>
            <p>Price: ₹{price}</p>
            <Link to='/Receipt'> <button>Shop Now</button> </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KidosSection;