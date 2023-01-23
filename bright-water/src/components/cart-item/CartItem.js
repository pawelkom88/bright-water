import Button from "components/Button/Button";
import classes from "./CartItem.module.scss";

export default function CartItem({ cartItems, itemDetails, onAdd }) {
  const { id, name, price, image, quantity } = itemDetails;

  function removeItem(id) {
    const newItems = [...cartItems];
    const index = newItems.findIndex(item => item.id === id);
    const selectedItem = newItems[index];

    if (selectedItem.quantity > 1) {
      newItems[index] = { ...selectedItem, quantity: selectedItem.quantity - 1 };

      onAdd([...newItems, newItems[index]]);

    } else {
      onAdd(newItems.filter(item => item.id !== id));
    }
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
        <Button onClick={() => removeItem(id)} className={classes["cart-item__remove"]}>
          Remove
        </Button>
      </div>
    </div>
  );
}
