import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2>TechStore</h2>

        <p className="footer-slogan">
          The best prices you can get!
        </p>

        <div className="footer-links">
          <a href="/">Home</a>
          <span>|</span>
          <a href="/products">Products</a>
          <span>|</span>
          <a href="/about">About</a>
        </div>

        <p className="footer-course">
          Fullstack Project 2026
        </p>

        <p className="footer-copy">
          © 2026 TechStore Team
        </p>
      </div>
    </footer>
  );
}

export default Footer;