import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Products.css";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: 1,
      name: "Product Name 1",
      price: "999 SEK",
      description: "Short product description will be shown here.",
    },
    {
      id: 2,
      name: "Product Name 2",
      price: "1299 SEK",
      description: "Short product description will be shown here.",
    },
    {
      id: 3,
      name: "Product Name 3",
      price: "799 SEK",
      description: "Short product description will be shown here.",
    },
    {
      id: 4,
      name: "Product Name 4",
      price: "1499 SEK",
      description: "Short product description will be shown here.",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="products-page">
      <section className="products-header">
        <h1>Products</h1>
        <p>Browse our available products.</p>

        <input
          className="products-search"
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </section>

      {filteredProducts.length === 0 ? (
        <p className="no-products-message">No products found.</p>
      ) : (
        <section className="products-list">
          {filteredProducts.map((product) => (
            <div className="product-item" key={product.id}>
              <div className="product-image-placeholder">Product Image</div>

              <div className="product-info">
                <h2>{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price}</p>

                <Link className="product-button" to={`/products/${product.id}`}>
                  View product
                </Link>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}

export default Products;
