import "./FormStyles.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

let SignUp = () => {
  let [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    contact: "",
  });

  let navigate = useNavigate();
  let navigate2Login = useNavigate()

  // Handle input changes
  let inpChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Handle form submission
  let Register = (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful! Redirecting to login...");
    navigate("/Login");
  };
// If already a user
let Go2Login=()=>{

  navigate2Login("/Login")

}


  return (
    <div className="signContainer">
      <div className="formContainer">
        <h2 className="formTitle">Sign Up</h2>
        <form onSubmit={Register}>
          <label htmlFor="name">Name</label>
          <input onChange={inpChange} name="name" id="name" type="text" placeholder="Enter Your Name" required />

          <label htmlFor="email">Email</label>
          <input onChange={inpChange} name="username" id="email" type="email" placeholder="Enter Your Email" required />

          <label htmlFor="password">Password</label>
          <input onChange={inpChange} name="password" id="password" type="password" placeholder="Enter Password" required />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input onChange={inpChange} name="confirmPassword" id="confirmPassword" type="password" placeholder="Confirm Password" required />

          <label htmlFor="contact">Contact</label>
          <input onChange={inpChange} name="contact" id="contact" type="tel" placeholder="Enter Your Contact Number" required />
    
        <div className="Buttons">
          <button type="submit" className="submitBtn">Sign Up</button>
          <button onClick={Go2Login} className="loginButton">Login</button>
        </div>

        
          
        </form>
      </div>
    </div>
  );
};

export { SignUp };
