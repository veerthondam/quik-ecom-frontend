import "../styles/ProductListing.css";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductListing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://quik-ecom.onrender.com/api/products")
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <main className="main-content">
      <div className="productcard-container">
        {products.length > 0 &&
          products.map((product) => (
            <div className="product-card">
              <div className="product-image">
                <img src={product.images[0]} alt="sss" />
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
          ))}
      </div>
    </main>
  );
}

export default ProductListing;
