import ViewProductButton from "components/ViewProductButton/ViewProductButton";
import classes from "./productCard.sass";

export default function ProductCard({ product }) {
  //Example of a product card: https://dribbble.com/shots/15208151-Furniture-shop-Product-card-design
  return (
    <>
      <h4>Product Card Component</h4>
      <ViewProductButton />
    </>
  );
}
