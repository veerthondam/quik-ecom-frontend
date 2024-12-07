import "../styles/ProductListing.css";
import { ProductsContext } from "../context/Productscontext";
import { useContext } from "react";

function ProductListing() {
  const { products = [], selectedCategory } = useContext(ProductsContext);

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : products;

  return (
    <main className="main-content">
      <div className="productcard-container">
        {filteredProducts.length > 0 ? (
          filteredProducts?.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-image">
                <img src={product.images[0]} alt={product.title} />
              </div>
              <div className="product-info p-4">
                <p className="product-title">{product.title}</p>
                <p className="product-weight">{product.weight}</p>
                <p className="product-price">
                  <span className="fw-bold">₹{product.price}</span>
                  <span className="ms-2 fw-normal text-decoration-line-through">
                    ₹{product.original_price}
                  </span>
                </p>
                <button className="product-button btn btn-outline-danger col-12">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </main>
  );
}

export default ProductListing;
