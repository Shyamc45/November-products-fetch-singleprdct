import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((product, index) => (
              <div key={index} className="cart-item">
                <img
                  className="cart-item-image"
                  src={product.image}
                  alt={product.title}
                />
                <div className="cart-item-details">
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                  <button
                    className="btn remove-btn"
                    onClick={() => dispatch(removeFromCart(product))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
