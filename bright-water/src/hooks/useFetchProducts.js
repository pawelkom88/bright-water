import { useState, useEffect } from "react";
import commerce from "lib/commerce";

export default function useFetchProducts() {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    commerce.products
      .list()
      .then(products => {
        setProducts(products.data);
      })
      .catch(error => {
        console.log("There was an error fetching the products", error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products };
}
