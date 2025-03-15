import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let LogIn = () => {
    let [letLogin, setLogin] = useState({
        username: "",
        password: ""
    });
    let [savedData, setSaveData] = useState(null);
    let navigate = useNavigate();

    let inpChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...letLogin, [name]: value });
    };

    useEffect(() => {
        let storedUser = JSON.parse(localStorage.getItem("form"));
        setSaveData(storedUser);
    }, []);

    let FinalLogin = (e) => {
        e.preventDefault();  // Prevent page refresh

        if (!savedData) {
            alert("No user found. Please register first.");
            return;
        }

        if (savedData.username !== letLogin.username) {
            alert("Username does not match");
            return;
        } 
        
        if (savedData.password !== letLogin.password) {
            alert("Password does not match");
            return;
        }

        alert("Login Successful");
        navigate("/dashboard");
    };

    return (
        <div className="LoginContainer">
            <h2>USER LOGIN</h2>
            <form onSubmit={FinalLogin}>
                <div className="inputGroup">
                    <label htmlFor="username">Username</label>
                    <input onChange={inpChange} name="username" type="text" id="username" placeholder="Enter username" />
                </div>
                <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                    <input onChange={inpChange} name="password" type="password" id="password" placeholder="Enter password" />
                </div>
                <div>
                    <button className="loginBtn">Log In</button>
                </div>
            </form>
        </div>
    );
};

export default LogIn;
