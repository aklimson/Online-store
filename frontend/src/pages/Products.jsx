import "../styles/Products.css";

function Products() {
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

  return (
    <main className="products-page">
      <section className="products-header">
        <h1>Products</h1>
        <p>Browse our available products.</p>
      </section>

      <section className="products-list">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <h2>{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>

            <button className="product-button">View product</button>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Products;
