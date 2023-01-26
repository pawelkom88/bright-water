import Button from "components/Button/Button";
import classes from "./QualityStepper.module.scss";

export default function QuantityStepper({ quantity, onQuantityChange }) {
  
  function increaseQuantity() {
    onQuantityChange(prevQuantity => prevQuantity + 1);
  }

  function decreaseQuantity() {
    if (quantity < 1) {
      return;
    }
    onQuantityChange(prevQuantity => prevQuantity - 1);
  }

  return (
    <div className={classes.stepper}>
      <label htmlFor="Quantity" className="sr-only">
        Quantity
      </label>
      <div className={classes["stepper-inner"]}>
        <Button onClick={decreaseQuantity} className={classes["stepper-inner__btn"]}>
          -
        </Button>
        <span>
          <input
            onChange={e => onQuantityChange(+e.target.value)}
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={quantity}
          />
        </span>
        <Button onClick={increaseQuantity} className={classes["stepper-inner__btn"]}>
          +
        </Button>
      </div>
    </div>
  );
}
