import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import commerce from "lib/commerce";

export default function useFetchProduct() {
  const [product, setProduct] = useState("");
  const [error, setError] = useState(null);

  //Pull permalink from url
  const { id } = useParams();
  const productPermaLink = id.toString();

  //Fetching product by permalink
  const fetchProduct = () => {
    setError(false)
    commerce.products
      .retrieve(productPermaLink, { type: "permalink" })
      .then(product => {
        setProduct(product);
      })
      .catch(error => {
        setError(error.message)
        console.log("There was an error fetching the products", error);
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return { product,error };
}
