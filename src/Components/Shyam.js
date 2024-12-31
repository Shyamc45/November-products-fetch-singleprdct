import { useEffect, useState } from "react";
import './Shyam.css'; 

function Shyam() {
  const [cards, setcards] = useState([]);

  useEffect(() => {
    handleapi();
  }, []);

  const handleapi = async () => {
    let response = await fetch('https://fakestoreapi.com/products');
    let finaldata = await response.json();
    setcards(finaldata);
  };


  const groupedCategories = cards.reduce((groups, product) => {
    const category = product.category || 'Unknown'; // Group by category, default to 'Unknown' if not available
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(product);
    return groups;
  }, {});

  return (
    <div className="shopping-container">
      <nav className="navbar">
        <ul>
          <li><a href="#electronics">Electronics</a></li>
          <li><a href="#jewelery">Jewelery</a></li>
          <li><a href="#men's clothing">Men's Clothing</a></li>
          <li><a href="#women's clothing">Women's Clothing</a></li>
        </ul>
      </nav>
      <h1 className="header">Shopping</h1>

      {Object.keys(groupedCategories).map((category) => (
        <div className="category-section" id={category.toLowerCase()} key={category}>
          <h2 className="category-title">{category}</h2>
          <div className="cards-grid">
            {groupedCategories[category].map((product) => (
              <div className="card" key={product.id}>
                <h3 className="product-title">{product.title}</h3>
                <p className="description">{product.description}</p>
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <p className="price">${product.price}</p>
                <button className="btn-details">View Details</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shyam;
