import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Component.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Company Info */}
        <div>
          <h2 className="title">Nicee's</h2>
          <p className="text">Only the bearear knows</p>
        </div>
        
        {/* Navigation Links */}
        <div>
          <h3 className="heading">Quick Links</h3>
          <ul className="links">
            <li style={{listStyle:'none'}}><Link style={{textDecoration:'none'}} to='/'>Home</Link></li>
            <li style={{listStyle:'none'}}><Link style={{textDecoration:'none'}} to='/'>About</Link></li>
            <li style={{listStyle:'none'}}><Link style={{textDecoration:'none'}} to='/'>Services</Link></li>
            <li style={{listStyle:'none'}}><Link style={{textDecoration:'none'}} to='/'>Contact</Link></li>
          </ul>
        </div>
        
        {/* Social Media Links */}
        <div>
          <h3 className="heading">Follow Us</h3>
          <div className="social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
      
      <div className="bottom">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
}
