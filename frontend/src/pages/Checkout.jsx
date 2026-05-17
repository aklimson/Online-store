import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

import "../styles/Checkout.css";

function Checkout() {
  const { cartItems } = useContext(CartContext);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <main className="checkout-page">
        <h1>Checkout</h1>

        <p>Your cart is empty.</p>

        <Link to="/products" className="continue-shopping-button">
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <h1>Checkout</h1>

      <section className="checkout-layout">
        <section className="checkout-form-section">
          <h2>Shipping Information</h2>

          <form className="checkout-form">
            <input type="text" placeholder="Full Name" required />

            <input type="tel" placeholder="Phone Number" required />

            <input type="email" placeholder="Email" required />

            <input type="text" placeholder="Address" required />

            <button type="submit" className="place-order-button">
              Continue to Payment
            </button>
          </form>
        </section>

        <section className="checkout-summary">
          <h2>Order Summary</h2>

          {cartItems.map((item) => (
            <div className="checkout-item" key={item._id}>
              <div>
                <h3>{item.name}</h3>

                <p>Quantity: {item.quantity}</p>
              </div>

              <p>{item.price * item.quantity} SEK</p>
            </div>
          ))}

          <div className="checkout-total">
            <h3>Total</h3>

            <h3>{totalAmount} SEK</h3>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Checkout;