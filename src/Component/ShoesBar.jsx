import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaMale, FaFemale, FaChild, FaInfoCircle, FaUser } from "react-icons/fa";
import "./Component.css";

// Slider
import Carousel from 'react-bootstrap/Carousel';
import newRed from '../assets/Kidos/newred.jpg';
import goldenshoe2 from '../assets/Images/men3.jpg';
import goldenshoe3 from '../assets/Images/men.jpg';



export let NavShoesBar = () => {
  return (
    <nav className="magicNavbar">
      <Link className="magicLink" to="/"><FaHome /> Home</Link>
      <Link className="magicLink" to="/Mens"><FaMale /> Mens</Link>
      <Link className="magicLink" to="/Womens"><FaFemale /> Womens</Link>
      <Link className="magicLink" to="/Kidos"><FaChild /> Kids</Link>
      <Link className="magicLink" to="/About"><FaInfoCircle /> About</Link> 
      <Link className="magicLink" to="/Signup"><FaUser /> Login</Link>
    </nav>
  );
};


// Slider

export let Slider = () => {
  return (
    <Carousel className='corCont' data-bs-theme="dark">
      <Carousel.Item className='corItem'>
        <img className="d-block w-100" src={newRed} alt="First slide" />
        <Carousel.Caption className='corCap'>
          <h5>RED VELVET NIKE</h5>
          <p>Most stunning product of the month.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='corItem'>
        <img className="d-block w-100" src={goldenshoe2} alt="Second slide" />
        <Carousel.Caption className='corCap'>
          <h5>NIKE's JAGUAR</h5>
          <p>Roar of Jaguar From Wakanda.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='corItem'>
        <img className="d-block w-100" src={goldenshoe3} alt="Third slide" />
        <Carousel.Caption className='corCap'>
          <h5>NIKE's WHITE TIGER</h5>
          <p>White Tiger Flawless.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};


// Hero Section

export let HeroSection = () => {
  const shoes = [
    {
      id: 1,
      name: "Nike RED VELVET",
      img: newRed,
      colors: ["Red", "Black", "White"],
      sizes: [6, 7, 8, 9, 10, 11],
    },
    {
      id: 2,
      name: "NIKE's JAGUAR",
      img: goldenshoe2,
      colors: ["Gold", "Black", "Blue"],
      sizes: [6, 7, 8, 9, 10, 11],
    },
    {
      id: 3,
      name: "NIKE's WHITE TIGER",
      img: goldenshoe3,
      colors: ["White", "Black", "Gray"],
      sizes: [6, 7, 8, 9, 10, 11],
    },
  ];

  return (
    <div className="grid-container">
      {shoes.map((shoe) => (
        <div className="grid-item" key={shoe.id}>
          <div className="featShoe">
            <img src={shoe.img} alt={shoe.name} className="shoe-img" />
          </div>
          <h2 className="shoe-title">{shoe.name}</h2>

          {/* Shoe Color Selection */}
          <label className="label">Color:</label>
          <select className="select-box">
            {shoe.colors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>

          {/* Shoe Size Selection */}
          <label className="label">Size:</label>
          <select className="select-box">
            {shoe.sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>

          <button className="shop-btn">Shop Now</button>
        </div>
      ))}
    </div>
  );
};