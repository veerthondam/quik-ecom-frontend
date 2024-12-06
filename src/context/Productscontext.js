import { createContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://quik-ecom.onrender.com/api/products")
      .then((response) => {
        const data = response.data || [];
        setProducts(data);

        const uniqCatg = [];
        const seenCategories = new Set();

        data.forEach((product) => {
          const { category, images } = product;

          if (!seenCategories.has(category)) {
            seenCategories.add(category);
            uniqCatg.push({ category, images: images[0] });
          }
        });
        setCategories(uniqCatg);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <ProductsContext.Provider value={{ products, categories }}>
      {children}
    </ProductsContext.Provider>
  );
}
