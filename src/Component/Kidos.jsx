import { useMemo } from "react";
// Images
import Kid2 from "../assets/Kidos/kidu1.jpg";
import Kid3 from "../assets/Kidos/kidu2.jpg";
import Kid4 from "../assets/Kidos/kid3.jpg";
// Importing Link
import { Link } from "react-router-dom";

export const KidosSection = () => {
    const shoes = useMemo(() => [
        { id: 1, name: "Sporty Sneakers", price: 1200, image: Kid2 },
        { id: 2, name: "Casual Comfort", price: 900, image: Kid3 },
        { id: 3, name: "Classic Sandals", price: 1100, image: Kid4 }
    ], []);

    return (
        <section className="kidos-section">
            <h2>Trendy & Comfortable Kids' Shoes</h2>
            <div className="shoe-container">
                {shoes.map(({ id, name, price, image }) => (
                    <div className="kidshoe-card" key={id}>
                        <img src={image} alt={name} loading="lazy" />
                        <h3>{name}</h3>
                        <p>Price: ₹{price}</p>
                       <Link to='/Receipt'> <button>Shop Now</button> </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};


// CSS Styling
const styles = `
.kidos-section {
    text-align: center;
    padding: 40px;
    background-color: #fdfdfd;
}

.kidos-section h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
}

.shoe-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.kidshoe-card {
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 220px;
    transition: transform 0.3s ease-in-out;
}

.kidshoe-card:hover {
    transform: scale(1.05);
}

.kidshoe-card img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
}

.kidshoe-card h3 {
    font-size: 1.2rem;
    margin: 10px 0;
}

.kidshoe-card p {
    color: #777;
    font-weight: 500;
}

.kidshoe-card button {
    background: #ff6b6b;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
}

.kidshoe-card button:hover {
    background: #ff5252;
}
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
