import { useState } from "react";
import CartItem from "components/cart-item/CartItem";
import MenuRight from "components/sidebar-menu/menu-right/MenuRight";
import Button from "components/Button/Button";
import { cartIcon } from "helpers/assets";
import classes from "./Cart.module.scss";

export default function Cart({ cartItems }) {
  const [toggleCart, setToggleCart] = useState(false);

  function handleSidebar() {
    setToggleCart(!toggleCart);
  }

  return (
    <>
      <Button onClick={handleSidebar}>
        <span className={classes["cart-quantity"]} data-count={cartItems.length}></span>
        <img className={classes.cart} src={cartIcon.src} alt={cartIcon.alt} />
      </Button>

      <MenuRight onToggle={handleSidebar} condition={toggleCart}>
        {!cartItems?.length && <p>Cart is empty</p>}
        {cartItems?.map(item => {
          return <CartItem key={item.id} itemDetails={item} />;
        })}
        <div className={classes["cart-buttons"]}>
          <Button>Clear All</Button>
          <Button>Checkout</Button>
        </div>
      </MenuRight>
    </>
  );
}
