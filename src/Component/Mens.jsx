import '../Component/Component.css'
import air1 from '../assets/Images/air11.jpg'
import air2 from '../assets/Images/aair2.jpg'
import air3 from '../assets/Images/air33.jpg'
import air4 from '../assets/Images/aair44.jpg'
// import air5 from '../assets/Images/air5.jpg'



export const MenShoes = () => {
    const shoes = [
      { id: 1, name: 'Nike Air Max', description: 'Premium quality running shoes', price: '₹11,120', image: air1 },
      { id: 2, name: 'Adidas Ultraboost', description: 'Ultimate comfort and style', price: '₹15,150', image: air2 },
      { id: 3, name: 'Puma RS-X', description: 'Modern sneakers for daily wear', price: '₹11,110', image: air3 },
      { id: 4, name: 'Reebok Classic', description: 'Vintage style with a modern twist', price: '₹10,100', image: air4 }
    ];
  
    return (
      <div className="container">
        {shoes.map((shoe) => (
          <div className="shoe-card" key={shoe.id}>
            <img src={shoe.image} alt={shoe.name} className={shoe.id === 3 ? 'shoe3' : ''}/>
            <h3>{shoe.name}</h3>
            <p>{shoe.description}</p>
            <div className="price">{shoe.price}</div>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>
    );
  };