import { useContext } from "react";
import "../styles/Sidebar.css";
import { ProductsContext } from "../context/Productscontext";

function Sidebar() {
  const { categories, selectCategory, selectedCategory } =
    useContext(ProductsContext);
  const handleCategoryClick = (category) => {
    selectCategory(category);
  };

  return (
    <div className="sidebar border-end p-3">
      {
        <ul className="list-group list-group-flush">
          {categories.map((product, index) => (
            <li
              className={`list-group-item list-group-item-action ${
                selectedCategory === product.category ? "active" : ""
              }`}
              aria-current="true"
              key={index}
              onClick={() => handleCategoryClick(product.category)}
            >
              <div className="d-flex align-items-center gap-3">
                <div className="img-thumbnail">
                  <img
                    className=""
                    src={product.images}
                    alt={product.category}
                  />
                </div>
                <div>{product.category}</div>
              </div>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

export default Sidebar;
