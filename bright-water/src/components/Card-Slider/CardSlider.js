import Button from "components/Button/Button";
import { removeDuplicateObjects } from "helpers/helpers";
import classes from "./CardSlider.module.scss";

export default function CardSlider({ assets, onSelect }) {
  const filteredAssets = removeDuplicateObjects(assets, "id");

  return (
    <div className={classes["card-images"]}>
      {filteredAssets?.map(({ id, url }) => {
        // remove white space
        const modifiedUrl = url.replace(/ /g, ""); //some urls are broken, so could not display image correctly

        const alt = url.split("|")[1];
        return (
          <div key={id}>
            <Button onClick={() => onSelect(modifiedUrl)}>
              <img src={modifiedUrl} alt={alt} />
            </Button>
          </div>
        );
      })}
    </div>
  );
}
