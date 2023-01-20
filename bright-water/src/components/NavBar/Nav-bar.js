import { Link } from "react-router-dom";
import MobileMenuBtn from "./menu-mobile/MobileMenuBtn";
import Cart from "components/cart/Cart";
import { logoIcon } from "helpers/assets";
import classes from "./Nav-bar.module.scss";

export default function NavBar({ navItems }) {
  return (
    <header className={`container ${classes.header}`}>
      <nav className={classes.navigation}>
        <ul className={classes["navigation-items"]}>
          {navItems.map((item, index) => (
            <li className={classes["navigation-item"]} key={index}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <MobileMenuBtn />
      <Link to="/">
        <img className={classes.logo} src={logoIcon.src} alt={logoIcon.alt} />
      </Link>
      <Cart />
    </header>
  );
}
