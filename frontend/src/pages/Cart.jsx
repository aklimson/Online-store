import "../styles/Cart.css";

import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <h1>Your Cart</h1>

        <p>Your cart is empty.</p>

        <Link to="/products">Continue Shopping</Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h1>Your Cart</h1>

      {cartItems.map((product) => (
        <section className="cart-item" key={product._id}>
          <div className="cart-item-image">
            <img src={product.image} alt={product.name} width="200" />
          </div>

          <div className="cart-item-info">
            <h2>{product.name}</h2>

            <p>{product.model}</p>

            <p>{product.price} SEK</p>

            <p>Quantity: {product.quantity}</p>
          </div>
        </section>
      ))}

      <Link to="/products">Continue Shopping</Link>
    </main>
  );
}

export default Cart;