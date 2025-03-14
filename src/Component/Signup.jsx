import "./FormStyles.css";

let SignUp = () => {
    return (
        <div className="signContainer">
            <div className="formContainer">
                <h2 className="formTitle">Sign Up</h2>
                <form>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder="Enter Your Name" />

                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="Enter Your Email" />

                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" />

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input id="confirmPassword" type="password" placeholder="Confirm Password" />

                    <label htmlFor="contact">Contact</label>
                    <input id="contact" type="tel" placeholder="Enter Your Contact Number" />

                    
                    <button type="submit" className="submitBtn">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export { SignUp };