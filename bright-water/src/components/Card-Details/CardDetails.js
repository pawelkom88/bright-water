import ColorCircle from "components/Color-Circle/ColorCircle";
import QuantityStepper from "components/Quantity-stepper/QuantityStepper";
import Button from "components/Button/Button";
import { stripHTMLTag, colors } from "helpers/helpers";
import classes from "./CardDetails.module.scss";

export default function CardDetails({ cartHandler, product, onSet }) {
  const { name, description, price } = product || {};

  const modifiedDescription = stripHTMLTag(description);

  function handleBottleColor(code) {
    onSet(code.hex);
  }

  return (
    <div className={classes["card-description"]}>
      <h1 className={classes["card-description__heading"]}>{name}</h1>
      <p className={classes["card-description__content"]}>{modifiedDescription}</p>
      <div className={classes["color-selection"]}>
        {colors.slice(colors.length / 2)?.map(({ id, code }) => {
          return <ColorCircle key={id} onSet={handleBottleColor} code={code} />;
        })}
      </div>
      <p className={classes["card-description__price"]}>{price.formatted_with_symbol}</p>
      <div className={classes["card-description__action"]}>
        <Button onClick={() => cartHandler(product)} className={classes.button}>
          Add to Cart
        </Button>
        <QuantityStepper />
      </div>
    </div>
  );
}
