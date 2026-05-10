import { Link, useParams } from "react-router-dom";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const products = [
    {
      id: "1",
      name: "Product Name 1",
      price: "999 SEK",
      description:
        "This page will show more information about the selected product.",
    },
    {
      id: "2",
      name: "Product Name 2",
      price: "1299 SEK",
      description:
        "This page will show more information about the selected product.",
    },
    {
      id: "3",
      name: "Product Name 3",
      price: "799 SEK",
      description:
        "This page will show more information about the selected product.",
    },
    {
      id: "4",
      name: "Product Name 4",
      price: "1499 SEK",
      description:
        "This page will show more information about the selected product.",
    },
  ];

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <main className="product-details-page">
        <section className="product-not-found">
          <h1>Product not found</h1>
          <p>The product you are looking for does not exist.</p>

          <Link className="details-button primary-button" to="/products">
            Back to products
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="product-details-page">
      <section className="product-details-card">
        <div className="product-details-image">Product Image</div>

        <div className="product-details-info">
          <p className="product-details-label">Product ID: {product.id}</p>
          <h1>{product.name}</h1>
          <p className="product-details-price">{product.price}</p>

          <p className="product-details-description">{product.description}</p>

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
