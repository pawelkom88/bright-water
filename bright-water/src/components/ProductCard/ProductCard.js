import ViewProductButton from "components/ViewProductButton/ViewProductButton";
import classes from "./productCard.module.scss";
import { stripHTMLTag } from "helpers/helpers";

export default function ProductCard({ productDetails }) {
  const { name, image, description, price, permalink } = productDetails;

  const modifiedDescription = stripHTMLTag(description);

  return (
    <div className={classes.card}>
      <img src={image.url} alt={name} />
      <div className={classes["card-body"]}>
        <h3 className={classes["card-heading"]}>{name}</h3>
        <p>{modifiedDescription}</p>
        <div className={classes["card-price"]}>{price.formatted_with_symbol}</div>
        <ViewProductButton productPermaLink={permalink} />
      </div>
    </div>
  );
}
