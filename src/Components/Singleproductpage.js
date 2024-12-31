import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../store';  
import { addToWishlist } from '../store';  
import './App.css';

function SingleProductPage() {
  const location = useLocation();
  const { id } = location.state || {};
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const handleSingleProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    handleSingleProduct();
  }, [id]);

  // Handle Add to Cart
  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product)); // Add product to cart using Redux
    }
  };

  // Handle Add to Wishlist
  const handleAddToWishlist = () => {
    if (product) {
      dispatch(addToWishlist(product)); // Add product to wishlist using Redux
    }
  };

  return (
    <div className="single-product-page">
      {product ? (
        <div className="product-details">
          <h1>{product.title}</h1>
          <h2>{product.category}</h2>
          <img src={product.image} alt={product.title} className="product-detail-image" style={{ width: "250px", height: "200px" }} />
          <p>{product.description}</p>
          <p className="price">${product.price}</p>
          
          {/* Add to Cart and Add to Wishlist buttons */}
          <div className="action-buttons">
            <button onClick={handleAddToCart} className="btn">Add to Cart</button>
            <button onClick={handleAddToWishlist} className="btn">Add to Wishlist</button>
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}

export default SingleProductPage;
