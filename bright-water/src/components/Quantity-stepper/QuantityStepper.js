import classes from "./QualityStepper.module.scss";

export default function QuantityStepper({ quantity, onChange }) {
  return (
    <div className={classes["stepper-input"]}>
      <input
        onChange={e => onChange(+e.target.value)}
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        value={quantity}
      />
    </div>
  );
}
