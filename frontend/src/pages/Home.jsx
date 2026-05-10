import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <main className="home">
      <section className="home-intro">
        <h1>Store</h1>
        <p>TVs, phones, laptops and accessories at unbeatable prices.</p>
      </section>

      <section className="home-cta">
        <h2>Browse our products</h2>
        <p>Everything you need in electronics, all in one place.</p>

        <Link to="/products" className="home-button">
          Shop now
        </Link>
      </section>

      <section className="home-categories">
        <h2>Categories</h2>

        <div className="category-grid">
          <Link to="/products?category=tvs">TVs</Link>
          <Link to="/products?category=phones">Phones</Link>
          <Link to="/products?category=laptops">Laptops</Link>
          <Link to="/products?category=accessories">Accessories</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
