import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <section className="home-intro">
        <h1>ElectroStore</h1>
        <p>Find TVs, phones, laptops and accessories at great prices.</p>
      </section>

      <section className="home-cta">
        <h2>Browse our products</h2>
        <p>Everything you need in electronics, all in one place.</p>

        <Link to="/products" className="home-button">
          Shop now
        </Link>
      </section>

      <section className="home-categories">
        <h2>Popular categories</h2>

        <div className="category-grid">
          <div>TVs</div>
          <div>Phones</div>
          <div>Laptops</div>
          <div>Accessories</div>
        </div>
      </section>
    </main>
  );
}

export default Home;