import '../Component/Component.css'
import air1 from '../assets/Images/air11.jpg'
import air2 from '../assets/Images/aair2.jpg'
import air3 from '../assets/Images/air33.jpg'
import air4 from '../assets/Images/aair44.jpg'
import air5 from '../assets/Images/air5.jpg'


export let MenShoes=()=>{
    return(
        <>
<div><h1>MENS : A Common Man Needs</h1></div>
<div className="container">
        {/* <!-- Shoe Card 1 --> */}
        
        <div className="shoe-card">
            <img  src={air1} alt="Shoe 1"/>
            <h3>Nike Air Max</h3>
            <p>Premium quality running shoes</p>
            <div className="price">₹11,120</div>
            <button className="buy-btn">Buy Now</button>
        </div>

        {/* <!-- Shoe Card 2 --> */}
        <div className="shoe-card">
            <img src={air2} alt="Shoe 2"/>
            <h3>Adidas Ultraboost</h3>
            <p>Ultimate comfort and style</p>
            <div className="price">₹15,150</div>
            <button className="buy-btn">Buy Now</button>
        </div>

        {/* <!-- Shoe Card 3 --> */}
        <div className="shoe-card">
            <img className='shoe3' src={air3} alt="Shoe 3"/>
            <h3>Puma RS-X</h3>
            <p>Modern sneakers for daily wear</p>
            <div className="price">₹11,110</div>
            <button className="buy-btn">Buy Now</button>
        </div>

        {/* <!-- Shoe Card 4 --> */}
        <div className="shoe-card">
            <img src={air4} alt="Shoe 4"/>
            <h3>Reebok Classic</h3>
            <p>Vintage style with a modern twist</p>
            <div className="price">₹10,100</div>
            <button className="buy-btn">Buy Now</button>
        </div>
    </div>
        
        </>
    )
}