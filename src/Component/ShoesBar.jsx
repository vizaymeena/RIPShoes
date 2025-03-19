import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaMale, FaFemale, FaChild, FaInfoCircle, FaUser } from "react-icons/fa";
import "./Component.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



// Slider
import Carousel from 'react-bootstrap/Carousel';
import newRed from '../assets/Kidos/newred.jpg';
import goldenshoe2 from '../assets/Images/men3.jpg';
import goldenshoe3 from '../assets/Images/men.jpg';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// Navbar

export let NavShoesBar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("loggedInUser")) || null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(JSON.parse(localStorage.getItem("loggedInUser")) || null);
    };

    // Listen for storage changes
    window.addEventListener("storage", handleStorageChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Logout Function
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

      {/* Display user info if logged in */}
      {user ? (
        <div className="userSection">
          <span className="userInfo">{user.name} <br /> ({user.username})</span>
          <button onClick={handleLogout} className="logoutBtn">Logout</button>
        </div>
      ) : (
        <Link className="magicLink" to="/Signup"><FaUser /> Login</Link>
      )}
    </nav>
  );
};


// Slider


export let SSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="slider-container">
      {/* ...setting is used to pass all the properties from an object (settings) into the <Slider> component. */}
      <Slider {...settings}>
        <div>
          <img src={newRed} alt="Shoe 1" className="slider-image" />
          <h3>Red Velvet Nike</h3>
          <p>Stylish and comfortable sneaker for daily wear.</p>
        </div>
        <div>
          <img src={goldenshoe2} alt="Shoe 2" className="slider-image" />
          <h3>Nike Air Zoom</h3>
          <p>Perfect for running with high-end cushioning.</p>
        </div>
        <div>
          <img src={goldenshoe3} alt="Shoe 3" className="slider-image" />
          <h3>Nike Classic</h3>
          <p>A timeless design with durability and comfort.</p>
        </div>
      </Slider>
    </div>
  );
};


// Hero Section



export let HeroSection = () => {
  const [selectedSize, setSelectedSize] = useState({});
  const navigate = useNavigate();

  const shoes = [
    {
      id: 1,
      name: "Nike RED VELVET",
      img: newRed,
      colors: ["Red", "Black", "White"],
      sizes: [6, 7, 8, 9, 10, 11],
      price: 5000, // Constant price
    },
    {
      id: 2,
      name: "NIKE's JAGUAR",
      img: goldenshoe2,
      colors: ["Gold", "Black", "Blue"],
      sizes: [6, 7, 8, 9, 10, 11],
      price: 6000,
    },
    {
      id: 3,
      name: "NIKE's WHITE TIGER",
      img: goldenshoe3,
      colors: ["White", "Black", "Gray"],
      sizes: [6, 7, 8, 9, 10, 11],
      price: 5500,
    },
  ];

  const handleShopNow = (shoe) => {
    const selectedShoeSize = selectedSize[shoe.id] || shoe.sizes[0];
    navigate('/Receipt', { 
      state: { 
        shoeName: shoe.name, 
        shoeSize: selectedShoeSize, 
        price: shoe.price // Send constant price
      } 
    });
  };

  const handleSizeChange = (shoeId, size) => {
    setSelectedSize((prev) => ({ ...prev, [shoeId]: Number(size) }));
  };

  return (
    <div className="grid-container">
      {shoes.map((shoe) => (
        <div className="grid-item" key={shoe.id}>
          <div className="featShoe">
            <img src={shoe.img} alt={shoe.name} className="shoe-img" />
          </div>
          <h2 className="shoe-title">{shoe.name}</h2>
          <p>Price: ₹{shoe.price}</p>

          <label className="label">Color:</label>
          <select className="select-box">
            {shoe.colors.map((color, index) => (
              <option key={index} value={color}>{color}</option>
            ))}
          </select>

          <label className="label">Size:</label>
          <select className="select-box" onChange={(e) => handleSizeChange(shoe.id, e.target.value)}>
            {shoe.sizes.map((size, index) => (
              <option key={index} value={size}>{size}</option>
            ))}
          </select>

          <button className="shop-btn" onClick={() => handleShopNow(shoe)}>Shop Now</button>
        </div>
      ))}
    </div>
  );
};
