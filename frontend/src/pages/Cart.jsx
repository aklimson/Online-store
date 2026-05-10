import "../styles/Cart.css";

function Cart() {
  return (
    <main className="cart">
      <h1>Cart</h1>

      <section className="cart-items">
        <div className="cart-item">
          <h3>Product</h3>
          <p>Price: 499</p>
          <p>Quantity: 1</p>
        </div>
      </section>

      <section className="cart-summary">
        <h2>Order Summary</h2>
        <p>Total: 499</p>

        <button>Proceed to Checkout</button>
      </section>
    </main>
  );
}

export default Cart;