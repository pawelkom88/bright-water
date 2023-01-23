import { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "components/cart-item/CartItem";
import MenuRight from "components/sidebar-menu/menu-right/MenuRight";
import Notification from "components/notification/Notification";
import Button from "components/Button/Button";
import { cartIcon } from "helpers/assets";
import classes from "./Cart.module.scss";

export default function Cart({ cartItems, onAdd }) {
  const [toggleCart, setToggleCart] = useState(false);
  const [notifyUser, setNotifyUser] = useState(false);

  function handleSidebar() {
    setToggleCart(!toggleCart);
  }

  function removeAllItems() {
    onAdd([]);
  }

  function handleRemoveAll() {
    setToggleCart(false);
    setNotifyUser(true);
  }

  return (
    <>
      <Button onClick={handleSidebar}>
        <span className={classes["cart-quantity"]} data-count={cartItems.length}></span>
        <img className={classes.cart} src={cartIcon.src} alt={cartIcon.alt} />
      </Button>

      <MenuRight onToggle={handleSidebar} condition={toggleCart}>
        {!cartItems?.length ? (
          <p>Cart is empty</p>
        ) : (
          <>
            {cartItems?.map(item => {
              return (
                <CartItem key={item.id} itemDetails={item} cartItems={cartItems} onAdd={onAdd} />
              );
            })}

            <div className={classes["cart-buttons"]}>
              <Button
                className={`${classes.button} ${classes["button-remove"]}`}
                onClick={handleRemoveAll}>
                Clear All
              </Button>

              <Link className={`${classes.button} ${classes["button-checkout"]}`} to="/checkout">
                Checkout
              </Link>
            </div>
          </>
        )}
      </MenuRight>

      {notifyUser && (
        <Notification warning={true} onNotify={setNotifyUser} time={10000} heading="Are you sure ?">
          <span className={classes["cart-buttons"]}>
            <Button
              className={`${classes.button} ${classes["button-remove"]}`}
              onClick={() => {
                setNotifyUser(false);
                removeAllItems();
              }}>
              Yes
            </Button>
            <Button
              className={`${classes.button} ${classes["button-cancel"]}`}
              onClick={() => setNotifyUser(false)}>
              No
            </Button>
          </span>
        </Notification>
      )}
    </>
  );
}
