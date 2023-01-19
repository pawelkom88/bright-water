import Button from "components/Button/Button";
import { Link } from "react-router-dom";
import classes from "./viewProductButton.module.scss";

export default function ViewProductButton({ productPermaLink }) {
  const permaLink = productPermaLink;

  return (
    <Link className={classes.button} to={`/product/${permaLink}`}>
      View Product
    </Link>
  );
}
