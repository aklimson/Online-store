import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../styles/Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

  const categories = [
    { label: "All", value: "" },
    { label: "Phones", value: "Phone" },
    { label: "Laptops", value: "Laptop" },
    { label: "TVs", value: "Television" },
    { label: "Accessories", value: "Accesories" },
  ];

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const response = await fetch(`${API_URL}/products`);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
        setErrorMessage("Could not load products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [API_URL]);

  const handleCategoryChange = (category) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  const filteredProducts = products.filter((product) => {
    const searchValue = searchTerm.toLowerCase();

    const matchesSearch =
      product.name?.toLowerCase().includes(searchValue) ||
      product.model?.toLowerCase().includes(searchValue) ||
      product.description?.toLowerCase().includes(searchValue);

    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;

    return matchesSearch && matchesCategory;
  });

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

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category.label}
              className={
                selectedCategory === category.value ||
                (!selectedCategory && category.value === "")
                  ? "category-filter-button active"
                  : "category-filter-button"
              }
              onClick={() => handleCategoryChange(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {isLoading && <p className="products-status">Loading products...</p>}

      {errorMessage && <p className="products-status error">{errorMessage}</p>}

      {!isLoading && !errorMessage && filteredProducts.length === 0 && (
        <p className="no-products-message">No products found.</p>
      )}

      {!isLoading && !errorMessage && filteredProducts.length > 0 && (
        <section className="products-list">
          {filteredProducts.map((product) => (
            <div className="product-item" key={product._id}>
              <div className="product-image-placeholder">Product Image</div>

              <div className="product-info">
                <p className="product-category">{product.category}</p>
                <h2>{product.name}</h2>

                <p className="product-model">Model: {product.model}</p>

                <p className="product-description">{product.description}</p>

                <p className="product-price">{product.price} SEK</p>

                <p
                  className={
                    product.quantity > 0
                      ? "product-stock in-stock"
                      : "product-stock out-of-stock"
                  }
                >
                  {product.quantity > 0
                    ? `${product.quantity} in stock`
                    : "Out of stock"}
                </p>

                <Link className="product-button" to={`/products/${product._id}`}>
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
