import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.length);
  const wishlistItems = useSelector((state) => state.wishlist.length);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="nav-logo">Shyam's Emporium</Link>
      </div>
      <div className="nav-links">
        <Link to="/cart" className="nav-button">
          <span>Cart</span> 
          <span className="badge">{cartItems}</span>
        </Link>
        <Link to="/wishlist" className="nav-button">
          <span>Wishlist</span>
          <span className="badge">{wishlistItems}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
