import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Component/Component.css';
import air1 from '../assets/Images/air11.jpg';
import air2 from '../assets/Images/aair2.jpg';
import air3 from '../assets/Images/air33.jpg';
import air4 from '../assets/Images/aair44.jpg';
import men1 from '../assets/Kidos/Dmen1.jpg'
import men2 from '../assets/Kidos/Dmen2.jpg'
import men3 from '../assets/Kidos/Dmen3.jpg'
import men4 from '../assets/Kidos/Dmen3.jpg'
import men5 from '../assets/Kidos/Dmen3.jpg'

export let MenShoes = () => {
  let navigate = useNavigate();
  let [selectedSize, setSelectedSize] = useState({});
  
  const shoes = [
    { id: 1, name: 'Nike Air Max', description: 'Premium quality running shoes', price: 11120, image: air1, sizes: [7, 8, 9, 10] },
    { id: 2, name: 'Adidas Ultraboost', description: 'Ultimate comfort and style', price: 15150, image: air2, sizes: [6, 7, 8, 9, 10] },
    { id: 3, name: 'Puma RS-X', description: 'Modern sneakers for daily wear', price: 11110, image: air3, sizes: [8, 9, 10, 11] },
    { id: 4, name: 'Reebok Classic', description: 'Vintage style with a modern twist', price: 10100, image: air4, sizes: [6, 7, 8, 9] },
    { id: 4, name: 'Reebok Classic', description: 'Vintage style with a modern twist', price: 10100 , image: men1, sizes: [6, 7, 8, 9] },
    { id: 4, name: 'Reebok Classic', description: 'Vintage style with a modern twist', price: 10100 , image: men2, sizes: [6, 7, 8, 9] },
    { id: 4, name: 'Reebok Classic', description: 'Vintage style with a modern twist', price: 10100, image: men3, sizes: [6, 7, 8, 9] },
    { id: 4, name: 'Reebok Classic', description: 'Vintage style with a modern twist', price: 10100, image: men4, sizes: [6, 7, 8, 9] },
    { id: 4, name: 'Reebok Classic', description: 'Vintage style with a modern twist', price: 10100 , image: men5, sizes: [6, 7, 8, 9] },
  ];

  let handleSizeChange = (shoeId, size) => {
    setSelectedSize((prev) => ({ ...prev, [shoeId]: size }));
  };

  const handleBuyNow = (shoe) => {
    let isLoggedIn = localStorage.getItem('loggedInUser');
    let size = selectedSize[shoe.id] || shoe.sizes[0];
    
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));  
  
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
      <h1 className='mensHeading'>Mens Footwear</h1>
      <div className="container">
        {shoes.map((shoe) => (
          <div className="shoe-card" key={shoe.id}>
            <img src={shoe.image} alt={shoe.name} className={shoe.id === 3 ? 'shoe3' : ''} />
            <h3>{shoe.name}</h3>
            <p>{shoe.description}</p>
            <div className="price">{shoe.price}</div>

            {/* Shoe Size Selection */}
            <label className="size-label">Select Size:</label>
            <select 
              className="ShoeSize" 
              onChange={(e) => handleSizeChange(shoe.id, e.target.value)}
              value={selectedSize[shoe.id] || shoe.sizes[0]}
            >
              {shoe.sizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>

            <button className="buy-btn" onClick={() => handleBuyNow(shoe)}>Buy Now</button>
          </div>
        ))}
      </div>
    </>
  );
};
