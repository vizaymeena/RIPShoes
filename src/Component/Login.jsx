import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

let LogIn = () => {
  let [letLogin, setLogin] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  // Handle Input Change
  let inpChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...letLogin, [name]: value });
  };

  // Perform Login
  let FinalLogin = async (e) => {
    e.preventDefault();

   
      // Fetch all users from JSON
      const response = axios.get("http://localhost:3000/users")
      .then((response)=>{
        const users = response.data;

      // Check if the user exists
      const matchedUser = users.find(
        (user) =>
          user.email === letLogin.username && user.password === letLogin.password
      );

      if (!matchedUser) {
        alert("Invalid Email or Password");
        return;
      }

      // Save user data to localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));

      alert("Login Successful!");

      // Redirect based on role
      if (matchedUser.role === "admin") {
        navigate("/AdminDashboard");
      } else {
        navigate("/UserDashboard");
      }
      })
     
  };

  return (
    <div className="LoginContainer">
      <h2>USER LOGIN</h2>
      <form onSubmit={FinalLogin}>
        <div className="inputGroup">
          <label htmlFor="username">Email</label>
          <input
            onChange={inpChange}
            name="username"
            type="email"
            id="username"
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            onChange={inpChange}
            name="password"
            type="password"
            id="password"
            placeholder="Enter Password"
            required
          />
        </div>
        <div>
          <button className="loginBtn">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
