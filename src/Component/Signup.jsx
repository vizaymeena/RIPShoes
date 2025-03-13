import './Component.css'


export let RegisterAccount = () => {
    return (
        <>
            <div className="container">
                <h2>Sign Up</h2>
                <form className="signup-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                    
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required />
                    
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" required />
                    
                    <label htmlFor="pincode">Pincode</label>
                    <input type="text" id="pincode" name="pincode" required />
                    
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />
                    
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </>
    );
};



//  CSS

const style2 =`
 .container {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
        }
        .signup-form {
            display: grid;
            gap: 10px;
        }
        label {
            font-weight: bold;
        }
        input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            background: #28a745;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background: #218838;
        }
`

document.head.insertAdjacentHTML("beforeend",`<style>${style2}</style>`)