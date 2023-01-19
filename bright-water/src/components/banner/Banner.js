import { BannerImg } from "helpers/assets";
import classes from "./Banner.module.scss";
import Button from "components/Button/Button";

export default function Banner() {
  return (
    <div className={classes.banner}>
      <div className={classes["banner-image"]}>
        <img src={BannerImg.src} alt={BannerImg.alt} />
      </div>
      <div className={classes["banner-description"]}>
        <h2>Free Delivery - Orders Over $50</h2>
        <Button className={classes["banner-button"]}>Order now</Button>
      </div>
    </div>
  );
}
