import Button from "components/Button/Button";
import classes from "./QualityStepper.module.scss";
import { useState } from "react";
export default function QuantityStepper() {
  const [quantity, setQuantity] = useState(0);

  function increaseQuantity() {
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  function decreaseQuantity() {
    if (quantity < 1) {
      return;
    }
    setQuantity(prevQuantity => prevQuantity - 1);
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
            onChange={e => setQuantity(+e.target.value)}
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
