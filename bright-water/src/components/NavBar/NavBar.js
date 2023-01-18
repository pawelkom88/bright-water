import { Link } from "react-router-dom";
import Button from "components/Button/Button";
import { cartIcon, logoIcon } from "helpers/assets";
import classes from "./navBar.module.scss";
import MobileMenuBtn from "./mobile-menu/MobileMenuBtn";

export default function NavBar({ navItems }) {
  return (
    <header className={`container ${classes.header}`}>
      <nav className={classes.navigation}>
        <ul className={classes.listItems}>
          {navItems.map((item, index) => (
            <li className={classes.listItem} key={index}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <MobileMenuBtn />

      <Link to="/">
        <img className={classes.logo} src={logoIcon.src} alt={logoIcon.alt} />
      </Link>

      <Button>
        <img className={classes.cart} src={cartIcon.src} alt={cartIcon.alt} />
      </Button>
    </header>
  );
}
