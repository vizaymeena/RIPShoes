import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './Component.css';
// React icons
import { FaHome, FaMale, FaFemale, FaChild, FaInfoCircle, FaUser } from 'react-icons/fa';
// Buttons
import { Button } from 'react-bootstrap';


import goldenshoe2 from '../assets/Images/men3.jpg'; // Second shoe image
import goldenshoe from '../assets/Images/red.jpg'; // Third shoe image
import goldenshoe3 from '../assets/Images/men.jpg'






export let NavShoesBar = () => {
  return (
    <>

      {/* Navigation Bar */}
       
        
         

          <div>
            
            {/* Navbar Description */}
           <nav className='magicNavbar'>
             <Link className='magicLink' to='/'><FaHome /> Home</Link>
             <Link className='magicLink' to='/Mens'><FaMale /> Mens</Link>
             <Link className='magicLink' to='/Womens'><FaFemale /> Womens</Link>
             <Link className='magicLink' to='/Kids'><FaChild /> Kids</Link>
             <Link className='magicLink' to='/About'><FaInfoCircle /> About</Link>
             <Link className='magicLink' to='/Login'><FaUser /> Login</Link>
           </nav>
          </div>
          <div>
            <span className='userIcon'><i></i></span>
            <span className='userAccess'></span>
          </div>
        
       
     
  
    </>
  );
};

export let Slider=()=>{
  return(
    <>
       <Carousel className='corCont' data-bs-theme="dark">
      <Carousel.Item className='corItem'>
        <img
          className="d-block w-100"
          src={goldenshoe}
          alt="First slide"
        />
        <Carousel.Caption className='corCap'>
          <h5>RED VELVET NIKE</h5>
          <p>Most stunning product of the month .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='corItem'>
        <img
          className="d-block w-100"
          src={goldenshoe2}
          alt="Second slide"
        />
        <Carousel.Caption className='corCap'>
          <h5>NIKE's JAGUAR </h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='corItem'>
        <img
          className="d-block w-100"
          src={goldenshoe3}
          alt="Third slide"
        />
        <Carousel.Caption className='corCap'>
          <h5>NIKE's WHITE TIGER</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}


export let HeroSection=()=>{
  return(
    <>
     <div className="grid-container">
        {/* <!-- Card 1 --> */}
        <div className="grid-item">
            <i className="fas fa-arrow-right arrow-icon"></i>
            <div className='featShoe'> 
              <img src={goldenshoe} alt="Shoe 1" className="shoe-img"/> 
            </div>
            <h2 className="shoe-title">Nike RED VELVET</h2>
            <button className="shop-btn">Shop Now</button>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="grid-item">
            <i className="fas fa-arrow-right arrow-icon"></i>
            <div className='featShoe'> 
              <img src={goldenshoe2} alt="Shoe 2" className="shoe-img"/>
             </div>
            <h2 className="shoe-title">NIKE's JAGUAR</h2>
            <button className="shop-btn">Shop Now</button>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="grid-item">
            <i className="fas fa-arrow-right arrow-icon"></i>
            <div className='featShoe'> 
              <img src={goldenshoe3} alt="Shoe 3" className="shoe-img"/> 
            </div>
            <h2 className="shoe-title">NIKE's WHITE TIGER</h2>
            <button className="shop-btn">Shop Now</button>
        </div>

    </div>

    </>
  )
}
