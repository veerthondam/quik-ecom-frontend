import { useContext, useEffect } from "react";
import "../styles/Sidebar.css";
import { ProductsContext } from "../context/Productscontext";

function Sidebar() {
  const { categories, selectCategory, selectedCategory } =
    useContext(ProductsContext);

  useEffect(() => {
    if (!selectedCategory && categories.length > 0) {
      selectCategory(categories[0].category);
    }
  }, [categories, selectCategory, selectedCategory]);

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
                  <img src={product.images} alt={product.category} />
                </div>
                <div className="d-none d-lg-block">{product.category}</div>
              </div>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

export default Sidebar;
