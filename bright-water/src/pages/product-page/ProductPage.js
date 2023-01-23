import ProductDetails from "components/product-details/ProductDetails";
import useFetchProduct from "hooks/useFetchProduct";
import Spinner from "components/spinner/Spinner";

export default function ProductPage({ cartItems, onAdd }) {
  const { product } = useFetchProduct();

  return (
    <section className="container">
      {product ? (
        <ProductDetails product={product} onAdd={onAdd} cartItems={cartItems} />
      ) : (
        <Spinner />
      )}
    </section>
  );
}
