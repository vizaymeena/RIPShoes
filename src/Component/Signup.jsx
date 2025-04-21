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
    address: "",
  });

  let [errors, setErrors] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    contact: "",
    address: "", 
  });

  let navigate = useNavigate();
  let navigate2Login = useNavigate();

  // handle input changes
  let inpChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    validateField(name, value);
  };

  // validation function
  const validateField = (name, value) => {
    let err = { ...errors };

    // name validation
    if (name === "name") {
      if (value.length < 2 || value.length > 30) {
        err.name = "Name should be between 2 and 30 characters.";
      } 
      else if (!/^[A-Za-z ]+$/.test(value)) {
        err.name = "Name should only contain letters and spaces.";
      } 
      else {
        err.name = "";
      }
    } 
    // email validation
    else if (name === "username") {
      if (value === "") {
        err.username = "Email is required.";
      } 
      else if (!value.includes("@") || !value.endsWith(".com")) {
        err.username = "Invalid email format."
      } 
      else {
        err.username = ""
      }
    } 
    // password validation
    else if (name === "password") {
      if (value.length === 0) {
        err.password = "Password is required."
      } 
      else if (value.length > 6) {
        err.password = "Password must be at most 6 characters long."
      } 
      else if (!/^[A-Za-z0-9]+$/.test(value)) {
        err.password = "Password must only contain letters or numbers."
      } 
      else {
        err.password = ""
      }
    }
    // mobile number validation
    else if (name === "contact") {
      const startsWith = ['6', '7', '8', '9']
      if (value.length !== 10 || isNaN(value)) {
        err.contact = "Contact must be a valid 10-digit number."
      } 
      else if (!startsWith.includes(value[0])) {
        err.contact = "Invalid mobile number. Number can be accepted starting with digits 6, 7, 8, or 9."
      } 
      else {
        err.contact = "";
      }
    }
    // address validation
    else if (name === "address") {
      if (value === "") {
        err.address = "Address is required."
      } 
      else if (value.length < 10) {
        err.address = "Address must be at least 10 characters long."
      } 
      else {
        err.address = ""
      }
    }

    setErrors(err)
  };

  // register function
  let Register = (e) => {
    e.preventDefault();

    const hasErrors = Object.values(errors).some((err) => err !== "")
    if (hasErrors) {
      alert("Please fix the errors before submitting.")
      return
    }
    localStorage.setItem("user", JSON.stringify(user))
    alert("Signup successful! Redirecting to login...")
    navigate("/Login");
  }

  let Go2Login = () => {
    navigate2Login("/Login");
  }



  return (
    <div className="signContainer">
      <div className="formContainer">
        <h2 className="formTitle">Sign Up</h2>
        <form onSubmit={Register}>
          <label htmlFor="name">Name</label>
          <input onChange={inpChange} name="name" id="name" type="text" placeholder="Enter Your Name" value={user.name} />
          {errors.name && <div className="error">{errors.name}</div>}

          <label htmlFor="email">Email</label>
          <input onChange={inpChange} name="username" id="email" type="email" placeholder="Enter Your Email" value={user.username} />
          {errors.username && <div className="error">{errors.username}</div>}

          <label htmlFor="password">Password</label>
          <input onChange={inpChange} name="password" id="password" type="password" placeholder="Enter Password" value={user.password} />
          {errors.password && <div className="error">{errors.password}</div>}

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input onChange={inpChange} name="confirmPassword" id="confirmPassword" type="password" placeholder="Confirm Password" value={user.confirmPassword} />
          {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}

          <label htmlFor="contact">Contact</label>
          <input onChange={inpChange} name="contact" id="contact" type="tel" placeholder="Enter Your Contact Number" value={user.contact} inputMode="numeric" pattern="[0-9]*" />
          {errors.contact && <div className="error">{errors.contact}</div>}

         
          <label htmlFor="address">Address</label>
          <input onChange={inpChange} name="address" id="address" type="text" placeholder="Enter Your Address" value={user.address} />
          {errors.address && <div className="error">{errors.address}</div>}

          <div className="Buttons">
            <button type="submit" className="submitBtn">Sign Up</button>
            <button onClick={Go2Login} className="loginButton" type="button">Login</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export { SignUp }
