import Button from "components/Button/Button";
import { removeDuplicateObjects } from "helpers/helpers";
import classes from "./CardSlider.module.scss";

export default function CardSlider({ assets, onSelect }) {
  const filteredAssets = removeDuplicateObjects(assets, "id");

  return (
    <div className={classes["slider-images"]}>
      {filteredAssets?.map(({ id, url }) => {
        // remove white space
        const modifiedUrl = url.replace(/ /g, ""); //some urls are broken, so could not display image correctly

        const alt = url.split("|")[1];
        return (
          <Button key={id} onClick={() => onSelect({url: modifiedUrl, animate: 1})}>
            <img className={classes["slider-thumbnail"]} src={modifiedUrl} alt={alt} />
          </Button>
        );
      })}
    </div>
  );
}
