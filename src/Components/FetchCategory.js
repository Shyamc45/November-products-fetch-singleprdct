import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../store";
import Navbar from "./Navbar";
import "./App.css";

function FetchCategory() {
  const [categories, setCategory] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategory(json));
  }, []);

  const handleFilterCategory = async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await response.json();
    setFilterData(data);
  };

  return (
    <div className="fetch-category-container" style={styles.container}>
      <Navbar />

      <h1 style={styles.header}>Product Categories</h1>
    
      
  

      <div className="category-buttons" style={styles.categoryButtons}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilterCategory(category)}
            className="category-btn"
            style={styles.categoryButton}
          >
            {category}
          </button>
        ))}
      </div>
      


      <div className="product-grid" style={styles.productGrid}>
        {filterData.map((product) => (
          <div key={product.id} className="product-card" style={styles.productCard}>
            <Link
              to={`/productdetails/${product.id}`}
              state={{ id: product.id }}
              className="product-link"
              style={styles.productLink}
            >
              <img src={product.image} alt={product.title} className="product-image" style={styles.productImage} />
              <p style={styles.productTitle}>{product.title}</p>
              <p style={styles.productPrice}>${product.price}</p>
            </Link>
            


            <button className="btn btn-primary" onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>

            <button className="btn btn-secondary" onClick={() => dispatch(addToWishlist(product))}>
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  categoryButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "30px",
  },
  categoryButton: {
    padding: "10px 20px",
    fontSize: "1.2rem",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    paddingTop: "20px",
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    padding: "15px",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  },
  productLink: {
    textDecoration: "none",
    color: "#333",
    textAlign: "center",
  },
  productImage: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  productTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  productPrice: {
    fontSize: "1rem",
    color: "#007bff",
    fontWeight: "600",
  },
};

export default FetchCategory;
