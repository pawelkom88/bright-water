import { useState } from "react";
import { Link } from "react-router-dom";
import MenuLeft from "components/sidebar-menu/menu-left/MenuLeft";
import Button from "components/Button/Button";
import classes from "./MobileMenuBtn.module.scss";
import { menuIconOpen } from "helpers/assets";
import { navItems } from "helpers/helpers";

export default function MobileMenuBtn() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleSidebar() {
    setToggleMenu(!toggleMenu);
  }

  return (
    <>
      <Button onClick={() => setToggleMenu(!toggleMenu)} className={classes["mobile-menu-button"]}>
        <img src={menuIconOpen.src} alt={menuIconOpen.alt} />
      </Button>
      <MenuLeft onToggle={handleSidebar} condition={toggleMenu}>
        <nav className={classes.navigation}>
          <ul className={classes["navigation-items"]}>
            {navItems.map((item, index) => (
              <li className={classes["navigation-item"]} key={index}>
                <Link onClick={() => setToggleMenu(false)} to={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </MenuLeft>
    </>
  );
}
