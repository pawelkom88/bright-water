import Button from "components/Button/Button";
import classes from "./CartItem.module.scss";

export default function CartItem({ itemDetails }) {
  const { name, price, image, quantity } = itemDetails;

  function removeItem() {
    console.log("as");
  }

  return (
    <div className={classes["cart-item"]}>
      <img width={80} className={classes["cart-item__image"]} src={image.url} alt={image.alt} />
      <div className={classes["cart-item__name"]}>
        <span>{name}</span>
        <span>quantity: {quantity}</span>
      </div>
      <div className={classes["cart-item__action"]}>
        <span className={classes["cart-item__price"]}>{price.formatted_with_symbol}</span>
        <Button onClick={removeItem} className={classes["cart-item__remove"]}>
          Remove
        </Button>
      </div>
    </div>
  );
}
