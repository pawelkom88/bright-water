import { useState } from "react";
import MenuRight from "components/sidebar-menu/menu-right/MenuRight";
import Button from "components/Button/Button";
import { cartIcon } from "helpers/assets";
import classes from "./Cart.module.scss";

export default function Cart() {
  const [toggleCart, setToggleCart] = useState(false);


  function handleSidebar() {
    setToggleCart(!toggleCart);
  }

  return (
    <>
      <Button onClick={handleSidebar}>
        <img className={classes.cart} src={cartIcon.src} alt={cartIcon.alt} />
      </Button>

      <MenuRight
        onToggle={handleSidebar}
        condition={toggleCart}>
        CART
      </MenuRight>
    </>
  );
}
