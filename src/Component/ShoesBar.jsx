import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaMale, FaFemale, FaChild, FaInfoCircle, FaUser } from "react-icons/fa";
import "./Component.css";

// Images
import newRed from '../assets/Kidos/newred.jpg';
import goldenshoe2 from '../assets/Images/men3.jpg';
import goldenshoe3 from '../assets/Images/men.jpg';
import Addidas from '../assets/Kidos/Addidas.jpg';
import Nike from '../assets/Kidos/Nike.jpg';
import Puma from '../assets/Kidos/Puma.jpg';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Navbar Component
export let NavShoesBar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("loggedInUser")) || null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(JSON.parse(localStorage.getItem("loggedInUser")) || null);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/Signup");
  };

  return (
    <nav className="magicNavbar">
      <Link className="magicLink" to="/"><FaHome /> Home</Link>
      <Link className="magicLink" to="/Mens"><FaMale /> Mens</Link>
      <Link className="magicLink" to="/Womens"><FaFemale /> Womens</Link>
      <Link className="magicLink" to="/Kidos"><FaChild /> Kids</Link>
      <Link className="magicLink" to="/About"><FaInfoCircle /> About</Link>

      {user ? (
        <div className="userSection">
          <span className="userInfo">{user.name} <br /> ({user.email})</span>
          <button onClick={handleLogout} className="logoutBtn">Logout</button>
        </div>
      ) : (
        <Link className="magicLink" to="/Signup"><FaUser /> Login</Link>
      )}
    </nav>
  );
};

// Slider Component
export const Hit = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const sliderData = [
    { id: 1, image: newRed },
    { id: 2, image: goldenshoe2 },
    { id: 3, image: goldenshoe3 },
  ];

  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        {sliderData.map((slide) => (
          <div key={slide.id} className="slideItem">
            <img src={slide.image} alt={`Slide ${slide.id}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Hero Section Component

export let HeroSection = () => {
  const [selectedSize, setSelectedSize] = useState({});
  const navigate = useNavigate();

  const shoes = [
    { id: 1, name: "Nike RED VELVET", img: newRed, sizes: [6, 7, 8], price: 5000 },
    { id: 2, name: "NIKE's JAGUAR", img: goldenshoe2, sizes: [6, 7, 8], price: 6000 },
    { id: 3, name: "NIKE's WHITE TIGER", img: goldenshoe3, sizes: [6, 7, 8], price: 5500 }
  ];

  const handleShopNow = (shoe) => {
    const size = selectedSize[shoe.id] || shoe.sizes[0];
    navigate('/Receipt', { state: { shoeName: shoe.name, shoeSize: size, price: shoe.price } });
  };

  const handleSizeChange = (shoeId, size) => {
    setSelectedSize((prev) => ({ ...prev, [shoeId]: size }));
  };

  return (
    <>
      <h1 className="trendngHome">Explore: Trending</h1>
      <div className="heroGridContainer">
        {shoes.map((shoe) => (
          <div className="heroGridItem" key={shoe.id}>
            <div className="featShoe">
              <img src={shoe.img} alt={shoe.name} className="shoeImg" />
            </div>
            <h2 className="shoeTitle">{shoe.name}</h2>
            <p>Price: ₹{shoe.price}</p>
            
            {/* Shoe Size Selection */}
            <label htmlFor={`size-${shoe.id}`}>Select Size:</label>
            <select className="ShoeSize"
              id={`size-${shoe.id}`} 
              value={selectedSize[shoe.id] || shoe.sizes[0]} 
              onChange={(e) => handleSizeChange(shoe.id, e.target.value)}
            >
              {shoe.sizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>

            <button className="shopBtn" onClick={() => handleShopNow(shoe)}>Shop Now</button>
          </div>
        ))}
      </div>
    </>
  );
};

// Hero Section 2 Component
export const HeroSection2 = () => {
  const [selectedSize, setSelectedSize] = useState({});
  const navigate = useNavigate();

  const shoes = [
    { id: 1, name: "Nike Air Max", description: "Comfortable running shoes.", price: 4999, sizes: [6, 7, 8], image: Nike },
    { id: 2, name: "Adidas UltraBoost", description: "Premium sports shoes.", price: 6999, sizes: [6, 7, 8], image: Addidas },
    { id: 3, name: "Puma Runner", description: "Casual wear shoes.", price: 3999, sizes: [6, 7, 8], image: Puma }
  ];

  const handleBuyNow = (shoe) => {
    const size = selectedSize[shoe.id] || shoe.sizes[0];
    navigate('/Receipt', { state: { shoeName: shoe.name, shoeSize: size, price: shoe.price } });
  };

  const handleSizeChange = (shoeId, size) => {
    setSelectedSize((prev) => ({ ...prev, [shoeId]: size }));
  };

  return (
    <section className="heroSection2Container">
      <h2>Explore Our Shoes</h2>
      <div className="heroSection2Grid">
        {shoes.map((shoe) => (
          <div className="heroSection2Card" key={shoe.id}>
            <img src={shoe.image} alt={shoe.name} className="heroSection2Img" />
            <h3>{shoe.name}</h3>
            <p>{shoe.description}</p>
            <p className="heroSection2Price">₹{shoe.price}</p>
            
            {/* Shoe Size Selection */}
            <label htmlFor={`size-${shoe.id}`}>Select Size:</label>
            <select className="ShoeSize"
              id={`size-${shoe.id}`}
              value={selectedSize[shoe.id] || shoe.sizes[0]}
              onChange={(e) => handleSizeChange(shoe.id, e.target.value)}
            >
              {shoe.sizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>

            <button className="HeroBuyBtn2" onClick={() => handleBuyNow(shoe)}>Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};
