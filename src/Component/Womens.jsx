import "./Component.css";
import ws1 from '../assets/Images/Heels.jpg';
import ws2 from '../assets/Images/Ws8.jpg';
import ws3 from '../assets/Images/Ws4.jpg';
import ws5 from '../assets/Images/Ws5.jpg';
import ws6 from '../assets/Images/Ws6.jpg';
import ws7 from '../assets/Images/Ws7.jpg';
// import ws8 from '../assets/Images/Ws8.jpg'

export default function WomenShoe() {
  const shoes = [
    { id: 1, name: "Stylish Heels", price: "₹11,120", colors: ["Red", "Black"], sizes: ["6", "7", "8"], image: ws1 },
    { id: 2, name: "Casual Sneakers", price: "₹9,090", colors: ["White", "Blue"], sizes: ["6", "7", "8", "9"], image: ws2 },
    { id: 3, name: "Elegant Flats", price: "₹8000", colors: ["Beige", "Brown"], sizes: ["5", "6", "7"], image: ws3 },
    { id: 4, name: "Sporty Trainers", price: "₹11,110", colors: ["Pink", "Gray"], sizes: ["6", "7", "8", "9"], image: ws3 },
    { id: 5, name: "Chic Sandals", price: "₹7,070", colors: ["Gold", "Silver"], sizes: ["5", "6", "7", "8"], image: ws5 },
    { id: 6, name: "Comfy Loafers", price: "₹11,100", colors: ["Black", "Navy"], sizes: ["6", "7", "8"], image: ws6 },
    { id: 7, name: "Trendy Boots", price: "₹15,250", colors: ["Brown", "Black"], sizes: ["6", "7", "8", "9"], image: ws7 },
  ];

  return (
    <>
    <h1 className="womenHeading">Womens</h1>
    <div className="grid-container">
      {shoes.map((shoe) => (
        <div key={shoe.id} className="card Womencard">
          <img src={shoe.image} alt={shoe.name} className="shoe-image" />
          <h3>{shoe.name}</h3>
          <p className="price">{shoe.price}</p>
          <div className="options">
            <select>
              {shoe.sizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
            <select>
              {shoe.colors.map((color) => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
          </div>
          <button className="womenBuy">Buy Now</button>
        </div>
      ))}
    </div>
    </>
  );
}
