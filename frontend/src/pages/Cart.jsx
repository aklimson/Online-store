import "../styles/Cart.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";

function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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

            <div className="cart-quantity-controls">
              <button onClick={() => decreaseQuantity(product._id)}>
                -
              </button>

              <span>{product.quantity}</span>

              <button onClick={() => increaseQuantity(product._id)}>
                +
              </button>
              <button onClick={() => removeFromCart(product._id)}>
                <FaTrash />
              </button>
            </div>
          </div>
        </section>
      ))}

      <section className="cart-summary">
        <h2>Total: {totalAmount} SEK</h2>
        <Link to="/checkout" className="checkout-button">
          Proceed to Checkout
        </Link>
      </section>

      <Link to="/products" className="continue-shopping-button">Continue Shopping</Link>
    </main>
  );
}

export default Cart;