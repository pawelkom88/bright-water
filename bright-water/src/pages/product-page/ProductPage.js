import ProductDetails from "components/product-details/ProductDetails";
import useFetchProduct from "hooks/useFetchProduct";
import Spinner from "components/spinner/Spinner";
import Modal from "components/modal/Modal";

export default function ProductPage({ cartItems, onAdd }) {
  const { product, error } = useFetchProduct();

  return (
    <>
      <section className="container">
        {product ? (
          <ProductDetails product={product} onAdd={onAdd} cartItems={cartItems} />
        ) : (
          <Spinner />
        )}
      </section>

      {error && <Modal size="20rem">{error}</Modal>}
    </>
  );
}
