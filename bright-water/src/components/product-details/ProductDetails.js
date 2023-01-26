import { useState } from "react";
import CardDetails from "components/Card-Details/CardDetails";
import CardNav from "components/product-details/card-nav/CardNav";
import Notification from "components/notification/Notification";
import classes from "./ProductDetails.module.scss";
import CardImage from "components/Card-Image/CardImage";

export default function ProductDetails({ cartItems, product, onAdd }) {
  const [addToWishlist, setAddToWishlist] = useState(false);
  const [notifyUser, setNotifyUser] = useState(false);
  const [borderClr, setBorderClr] = useState("");
  const [quantity, setQuantity] = useState(0);

  function AddToCartHandler(product) {
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
      newItems.push({ ...productData, quantity: quantity ? quantity : 1 });
    } else {
      // if the item exist in the array, copy all items and modify the matching one by increasing value on quantity property
      const productData = newItems[index];

      newItems[index] = {
        ...productData,
        quantity: quantity ? quantity : productData.quantity + 1,
      };
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
          <CardImage product={product} border={borderClr} />
          <CardDetails
            cartHandler={AddToCartHandler}
            product={product}
            onSet={setBorderClr}
            quantity={quantity}
            onQuantityChange={setQuantity}
          />
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
