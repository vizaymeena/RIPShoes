import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let LogIn = () => {
  let [letLogin, setLogin] = useState({
    username: "",
    password: "",
  });

  let [savedData, setSaveData] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    let storedUser = JSON.parse(localStorage.getItem("user"));
    setSaveData(storedUser);
  }, []);

  let inpChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...letLogin, [name]: value });
  };

  let FinalLogin = (e) => {
    e.preventDefault();

    if (!savedData) {
      alert("No user found. Please register first.");
      return;
    }

    if (savedData.username !== letLogin.username) {
      alert("Email does not match");
      return;
    }

    if (savedData.password !== letLogin.password) {
      alert("Password does not match");
      return;
    }

    // Store logged-in user info
    localStorage.setItem("loggedInUser", JSON.stringify(savedData));

    alert("Login Successful");
    navigate("/");
  };

  return (
    <div className="LoginContainer">
      <h2>USER LOGIN</h2>
      <form onSubmit={FinalLogin}>
        <div className="inputGroup">
          <label htmlFor="username">Email</label>
          <input onChange={inpChange} name="username" type="email" id="username" placeholder="Enter Email" required />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input onChange={inpChange} name="password" type="password" id="password" placeholder="Enter password" required />
        </div>
        <div>
          <button className="loginBtn">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
