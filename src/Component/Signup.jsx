import "./FormStyles.css";
import React from "react";
import { useState } from "react";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

let SignUp = () => {

  let [form,setForm]= useState({
    name:'',
    username:'',
    password:'',
    confirmPassword:'',
    contact:''
   })

  let NaviGate = useNavigate()

// On input change
let inpChange=(e)=>{
    const {name,value}=e.target
    setForm({...form,[name]:value})
}
// On submission of form
let Register=(e)=>{
    e.preventDefault()
    localStorage.setItem("form",JSON.stringify(form))

    NaviGate('/Login')

}


    return (
        <div className="signContainer">
            <div className="formContainer">
                <h2 className="formTitle">Sign Up</h2>
                {/* Submit Function */}
                <form onSubmit={Register}>
                    <label htmlFor="name">Name</label>
                    <input onChange={inpChange} name="name" id="name" type="text" placeholder="Enter Your Name" />

                    <label htmlFor="email">Email</label>
                    <input onChange={inpChange} name="username" id="email" type="email" placeholder="Enter Your Email" />

                    <label htmlFor="password">Password</label>
                    <input onChange={inpChange} name="password" id="password" type="password" placeholder="Enter Password" />

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input onChange={inpChange} name="confirmpassword" id="confirmPassword" type="password" placeholder="Confirm Password" />

                    <label htmlFor="contact">Contact</label>
                    <input onChange={inpChange} name="contact" id="contact" type="tel" placeholder="Enter Your Contact Number" />

                    
                    <button type="submit" className="submitBtn">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export { SignUp };