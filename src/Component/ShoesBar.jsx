import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { FaHome, FaMale, FaFemale, FaChild, FaInfoCircle, FaUser } from "react-icons/fa";
import "./Component.css";

// Images
import newRed from '../assets/Kidos/newred.jpg';
import goldenshoe2 from '../assets/Images/men3.jpg';
import goldenshoe3 from '../assets/Images/men.jpg';
import Addidas from '../assets/Kidos/Addidas.jpg';
import Nike from '../assets/Kidos/Nike.jpg';
import Puma from '../assets/Kidos/Puma.jpg';
// AboutImages
import About1 from '../assets/Kidos/About1.jpg'
import About2 from '../assets/Kidos/About2.jpg'
import About3 from '../assets/Kidos/About3.jpg'


// Slider
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
  let [selectedSize, setSelectedSize] = useState({});
  let navigate = useNavigate();

  let shoes = [
    { id: 1, name: "Nike RED VELVET", img: newRed, sizes: [6, 7, 8], price: 5000 },
    { id: 2, name: "NIKE's JAGUAR", img: goldenshoe2, sizes: [6, 7, 8], price: 6000 },
    { id: 3, name: "NIKE's WHITE TIGER", img: goldenshoe3, sizes: [6, 7, 8], price: 5500 }
  ];

  let handleShopNow = (shoe) => {
    let isLoggedIn = localStorage.getItem('loggedInUser');
    let size = selectedSize[shoe.id] || shoe.sizes[0];
  
    if (isLoggedIn) {
      let user = JSON.parse(isLoggedIn);
      let name = user.name;
      let email = user.email;
  
      navigate('/receipt', {
        state: {
          name,
          email,
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
  

  let handleSizeChange = (shoeId, size) => {
    setSelectedSize((prev) => ({ ...prev, [shoeId]: size }))
  }


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
export let HeroSection2 = () => {
  let [selectedSize, setSelectedSize] = useState({});
  let navigate = useNavigate();

  const shoes = [
    { id: 1, name: "Nike Air Max", description: "Comfortable running shoes.", price: 4999, sizes: [6, 7, 8], image: Nike },
    { id: 2, name: "Adidas UltraBoost", description: "Premium sports shoes.", price: 6999, sizes: [6, 7, 8], image: Addidas },
    { id: 3, name: "Puma Runner", description: "Casual wear shoes.", price: 3999, sizes: [6, 7, 8], image: Puma }
  ];

  let handleBuyNow = (shoe) => {
    let isLoggedIn = localStorage.getItem('loggedInUser');
    let size = selectedSize[shoe.id] || shoe.sizes[0];
  
    if (isLoggedIn) {
      let user = JSON.parse(isLoggedIn);
      let name = user.name;
      let email = user.email;
  
      navigate('/receipt', {
        state: {
          name,
          email,
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
  }
  let handleSizeChange = (shoeId, size) => {
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




// ABOUT COMPONENT
export const AboutShoes = () => {
  const aboutData = [
    { id: 1, img: About1, title: 'Our Story' },
    { id: 2, img: About2, title: 'Our Mission' },
    { id: 3, img: About3, title: 'Our Vision' },
  ];

  return (
    <section id="aboutSection">
      <h2>About Us</h2>
      <div className="aboutContainer">
        {aboutData.map((item) => (
          <div className="aboutCard" key={item.id}>
            <img src={item.img} alt={item.title} className="aboutImg" />
            <div className="aboutOverlay">
              <h3>{item.title}</h3>
              <button className="exploreBtn">Explore</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
