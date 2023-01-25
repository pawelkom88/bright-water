import { Link } from "react-router-dom";
import { BackIcon, HeartIcon, HeartFilledIcon } from "helpers/assets";
import Button from "components/Button/Button";
import classes from "./CardNav.module.scss";

export default function CardNav({ setAddToWishlist, addToWishlist }) {
  const activeIcon = addToWishlist ? (
    <img src={HeartFilledIcon.src} alt={HeartFilledIcon.alt} />
  ) : (
    <img src={HeartIcon.src} alt={HeartIcon.alt} />
  );

  return (
    <nav className={classes["card-navigation"]}>
      <div className={classes["card-navigation__icons"]}>
        <Button>
          <img src={BackIcon.src} alt={BackIcon.alt} />
        </Button>
        <Link to="/" className={classes["card-navigation__link"]}>
          Back to Products
        </Link>
      </div>
      <Button onClick={() => setAddToWishlist(!addToWishlist)}>{activeIcon}</Button>
    </nav>
  );
}
