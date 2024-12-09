import "../styles/ProductListing.css";
import { ProductsContext } from "../context/Productscontext";
import { useContext, useEffect, useState } from "react";

function ProductListing() {
  const { products = [], selectedCategory } = useContext(ProductsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const ItemsperPage = 6;

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : products;

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const endIndex = currentPage * ItemsperPage;
  const startIndex = endIndex - ItemsperPage;

  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredProducts.length / ItemsperPage);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <main className="main-content">
      <div className="productcard-container">
        {currentProducts.length > 0 ? (
          currentProducts?.map((product, index) => (
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

      <nav aria-label="Page navigation example">
        <ul className="pagination d-flex justify-content-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePagination(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}

export default ProductListing;
