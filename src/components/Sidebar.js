import { useContext } from "react";
import "../styles/Sidebar.css";
import { ProductsContext } from "../context/Productscontext";

function Sidebar() {
  const { categories } = useContext(ProductsContext);
  console.log(categories);

  return (
    <div className="sidebar border-end p-3">
      {
        <ul className="list-group list-group-flush">
          {categories.map((product, index) => (
            <li
              className="list-group-item list-group-item-action"
              aria-current="true"
              key={index}
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
