import { useState } from "react";
import CardNav from "components/product-details/card-nav/CardNav";
import Notification from "components/notification/Notification";
import QuantityStepper from "components/Quantity-stepper/QuantityStepper";
import Button from "components/Button/Button";
import { stripHTMLTag, removeDuplicateObjects } from "helpers/helpers";
import classes from "./ProductDetails.module.scss";

const randomClr = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const options = Array(4).fill({ color: randomClr });

export default function ProductDetails({ cartItems, product, onAdd }) {
  const { name, assets, image, description, price } = product || {};

  const [selectedImage, setSelectedImage] = useState(null);
  const [addToWishlist, setAddToWishlist] = useState(false);
  const [notifyUser, setNotifyUser] = useState(false);
  const [borderClr, setBorderClr] = useState("");

  function handleBottleColor(color) {
    setBorderClr(color);
  }

  // some images are duplicated
  const filteredAssets = removeDuplicateObjects(assets, "id");

  const modifiedDescription = stripHTMLTag(description);

  function AddToCartHandler(product) {
    // reset state
    setNotifyUser(false);

    // copy cart items to avoid data mutation
    const newItems = [...cartItems];

    // find object in cartItems that matches the passed one
    const index = cartItems.findIndex(item => item.id === product.id);

    const productData = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
    };

    // if an item has not been added, copy existing items and add a new one
    if (index === -1) {
      newItems.push({ ...productData, quantity: 1 });
    } else {
      // if the item exist in the array, copy all items and modify the matching one by increasing value on quantity property
      const productData = newItems[index];

      // TO BE DONE
      // const productQuantity = quantity ? quantity : productData.quantity + 1;

      newItems[index] = { ...productData, quantity: productData.quantity + 1 };
    }
    // update cart with new items
    onAdd(newItems);

    // notify user
    setNotifyUser(true);
  }

  return (
    <>
      <div className={classes.card}>
        <CardNav setAddToWishlist={setAddToWishlist} addToWishlist={addToWishlist} />

        <div className={classes["card-body"]}>
          <div className={classes["card-image"]}>
            <img
              style={{ border: borderClr ? `3px solid ${borderClr}` : "" }}
              src={selectedImage ? selectedImage : image?.url}
              alt={name}
            />

            <div className={classes["card-images"]}>
              {filteredAssets?.map(({ id, url }) => {
                // remove white space
                const modifiedUrl = url.replace(/ /g, ""); //some urls are broken, so could not display image correctly

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
            <div className={classes["color-selection"]}>
              {options?.map(({ color }, index) => {
                return (
                  <div
                    onClick={() => handleBottleColor(color)}
                    tabIndex={0}
                    style={{
                      backgroundColor: randomClr,
                    }}
                    key={index}
                    className={classes.circle}></div>
                );
              })}
            </div>
            <p className={classes["card-description__price"]}>{price.formatted_with_symbol}</p>
            <div className={classes["card-description__action"]}>
              <Button onClick={() => AddToCartHandler(product)} className={classes.button}>
                Add to Cart
              </Button>
              <QuantityStepper />
            </div>
          </div>
        </div>
      </div>

      {notifyUser && (
        <Notification onNotify={setNotifyUser} time={4000} heading="Success">
          Item has been added to the cart
        </Notification>
      )}
      {/* {addToWishlist && (
        <Notification onNotify={setAddToWishlist} heading="Success">
          Item has been added to wishlist
        </Notification>
      )} */}
    </>
  );
}
