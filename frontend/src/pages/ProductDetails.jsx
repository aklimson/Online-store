import { Link, useParams } from "react-router-dom";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  return (
    <main className="product-details-page">
      <section className="product-details-card">
        <div className="product-details-image">Product Image</div>

        <div className="product-details-info">
          <p className="product-details-label">Product ID: {id}</p>
          <h1>Product Name</h1>
          <p className="product-details-price">999 SEK</p>

          <p className="product-details-description">
            This page will show more information about one selected product.
            Product data is static for now and will later come from the backend.
          </p>

          <div className="product-details-actions">
            <Link className="details-button primary-button" to="/cart">
              Add to cart
            </Link>

            <Link className="details-button secondary-button" to="/products">
              Back to products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
