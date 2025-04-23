import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

let LogIn = () => {
  let [letLogin, setLogin] = useState({
    username: "",
    password: "",
  });

  let navigate = useNavigate();

  let inpChange = (e) => {
    let { name, value } = e.target
    setLogin({ ...letLogin, [name]: value })
  };

  let FinalLogin = async (e) => {
    e.preventDefault()
    if (!letLogin.username.trim() || !letLogin.password.trim()) {
      alert("Email and Password are required.")
      return;
    }

    // get method 
    let res = await axios.get("http://localhost:3000/users")
    let users = res.data

    // check for existing user
    let matchedUser = users.find(
        (obj) =>
          obj.email === letLogin.username && obj.password === letLogin.password
      );

      if (!matchedUser) {
        alert("not a valid Email")
        return
      }

      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser))
      alert("successfully login")

      // getting values to send and display it on specific fields on reciept page
      let pendingPurchase = sessionStorage.getItem("pendingPurchase")
      let userInfo = {name:matchedUser.name,email:matchedUser.email}

         console.log(userInfo)
         
      if (pendingPurchase) {
        let data = JSON.parse(pendingPurchase)
        sessionStorage.removeItem("pendingPurchase")
        
        navigate("/receipt", { state: {...data,...userInfo} })
      } 
      else {
        navigate("/",{state:userInfo})
        window.location.reload()
      }
    } 
  

  return (
    <>
    <div className="LoginContainer">
      <h2>USER LOGIN</h2>
      <form onSubmit={FinalLogin}>

        <div className="inputGroup">
          <label htmlFor="username">Email</label>
          <input onChange={inpChange} name="username" type="email" id="username" 
          placeholder="Enter Email" autoFocus/>
        </div>

        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input onChange={inpChange} name="password" type="password" id="password" placeholder="Enter Password"/>
        </div>
        <div>
          <button className="loginBtn">Log In</button>
        </div>
      </form>
    </div>
    </>
 )
}

export default LogIn;
