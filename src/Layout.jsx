import { Outlet,Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Navbar Icons
import { FaHome, FaMale, FaFemale, FaChild, FaInfoCircle, FaUser } from "react-icons/fa";


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
    navigate("/");
  };

  // go to admin or userdashboard
  const DashBoard= () => {
    if (user) {
      if (user.role === "admin") {
        navigate("/AdminDasboard")
      } else {
        navigate("/UserDasboard")
      }
    } else {
      
      navigate("/Login");
    }
  };

  return (
    <>
    <nav className="magicNavbar">
      <Link className="magicLink" to="/"><FaHome /> Home</Link>
      <Link className="magicLink" to="/Mens"><FaMale /> Mens</Link>
      <Link className="magicLink" to="/Womens"><FaFemale /> Womens</Link>
      <Link className="magicLink" to="/Kidos"><FaChild /> Kids</Link>
      <span onClick={DashBoard} className="magicLink"><FaChild /> Dashboard </span>
      
     

      {user ? (
        <div className="userSection">
          <span className="userInfo">{user.name} <br /> ({user.email})</span>
          <button onClick={handleLogout} className="logoutBtn">Logout</button>
        </div>
      ) : (
        <Link className="magicLink" to="/Signup"><FaUser /> Signup</Link>
      )}
    </nav>


    <Outlet/>

     <footer className="footer">
          <div className="footer-container">
           
            <div className="footer-section">
              <h2 className="footer-title">Juuuta</h2>
              <p>Ultimate destination for comforting ur feets.</p>
            </div>
    
           
            <div className="footer-section">
              <h3>Teleport</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
    
          
            <div className="footer-section">
              <h3>Customer Assistance</h3>
              <ul>
                <li><Link to="/faqs">FAQs</Link></li>
                <li><Link to="/returns">Returns</Link></li>
                <li><Link to="/shipping">Shipping</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </div>
    
          </div>
        </footer>


    </>
  );
};