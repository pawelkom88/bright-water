import { useParams } from "react-router-dom";
import commerce from "lib/commerce";
import { useEffect, useState } from "react";

export default function useFetchProduct() {
  const [product, setProduct] = useState("");

  //Pull permalink from url
  const { id } = useParams();
  const productPermaLink = id.toString();

  //Fetching product by permalink
  const fetchProduct = () => {
    commerce.products
      .retrieve(productPermaLink, { type: "permalink" })
      .then(product => {
        setProduct(product);
      })
      .catch(error => {
        console.log("There was an error fetching the products", error);
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return { product };
}
