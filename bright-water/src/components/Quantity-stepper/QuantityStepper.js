import classes from "./QualityStepper.module.scss";

export default function QuantityStepper() {
  return (
    <div className={classes["stepper-input"]}>
      <input type="number" id="quantity" name="quantity" min="1" />
    </div>
  );
}
