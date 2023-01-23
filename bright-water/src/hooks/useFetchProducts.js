import { useState, useEffect } from "react";
import commerce from "lib/commerce";

export default function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (function fetchProducts() {
      setError(false);
      commerce.products
        .list()
        .then(products => {
          setProducts(products.data);
        })
        .catch(error => {
          setError(error.message);
          console.log("There was an error fetching the products", error);
        });
    })();
  }, []);

  return { products, error };
}
