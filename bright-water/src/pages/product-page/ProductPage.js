import { useState } from "react";
import useFetchProduct from "hooks/useFetchProduct";
import { Link } from "react-router-dom";
import QuantityStepper from "components/Quantity-stepper/QuantityStepper";
import Spinner from "components/spinner/Spinner";
import Button from "components/Button/Button";
import { BackIcon, HeartIcon, HeartFilledIcon } from "helpers/assets";
import { stripHTMLTag, removeDuplicateObjects } from "helpers/helpers";
import classes from "./productPage.module.scss";

export default function ProductPage() {
  const { product } = useFetchProduct();
  const { name, assets, image, description, price } = product || {};
  const [selectedImage, setSelectedImage] = useState(null);
  const [addToWishlist, setAddToWishlist] = useState(false);

  // some images are duplicated
  const filteredAssets = removeDuplicateObjects(assets, "id");

  const modifiedDescription = stripHTMLTag(description);

  const activeIcon = addToWishlist ? (
    <img src={HeartFilledIcon.src} alt={HeartFilledIcon.alt} />
  ) : (
    <img src={HeartIcon.src} alt={HeartIcon.alt} />
  );

  return (
    <section className="container">
      {product ? (
        <div className={classes.card}>
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
          <div className={classes["card-body"]}>
            <div className={classes["card-image"]}>
              <img src={selectedImage ? selectedImage : image?.url} alt={name} />

              <div className={classes["card-images"]}>
                {filteredAssets?.map(({ id, url }) => {
                  // remove white space
                  const modifiedUrl = url.replace(/ /g, "");
                  //some urls are broken, so could not display image correctly
                  const alt = url.split("|")[1];

                  return (
                    <div key={id}>
                      <Button onClick={() => setSelectedImage(modifiedUrl)}>
                        <img src={modifiedUrl} alt={alt} />
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={classes["card-description"]}>
              <h1 className={classes["card-description__heading"]}>{name}</h1>
              <p className={classes["card-description__content"]}>{modifiedDescription}</p>
              <p className={classes["card-description__price"]}>{price.formatted_with_symbol}</p>
              <div className={classes["card-description__action"]}>
                <Button className={classes.button}>Add to Cart</Button>
                <QuantityStepper />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </section>
  );
}
