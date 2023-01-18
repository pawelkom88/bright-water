import ViewProductButton from "components/ViewProductButton/ViewProductButton";
import classes from "./productCard.module.scss";

export default function ProductCard({ productDetails }) {
  const { name, image, description, price, permalink } = productDetails;

  return (
    <div>
      <img src={image.url} alt={name} />
      <h4>{name}</h4>
      {description}
      <span>{price.formatted_with_symbol}</span>
      <ViewProductButton productPermaLink={permalink} />
    </div>
  );
}
