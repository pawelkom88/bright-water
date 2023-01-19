import { Link } from "react-router-dom";
import Button from "components/Button/Button";
import classes from "./Footer.module.scss";
import { socialIcons } from "helpers/assets";

const date = new Date().getFullYear();

export default function Footer({ navItems }) {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <section className={classes["footer-top"]}>
          <div className={classes["footer-col"]}>
            <h3 className={classes["footer-col__heading"]}>Navigation</h3>
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={classes["footer-col"]}>
            <h3 className={classes["footer-col__heading"]}>Top Products</h3>
            <Link to="/product/kettle">Kettle</Link>
            <Link to="/product/headphones">Headphones</Link>
          </div>

          <div className={classes["footer-col"]}>
            <h3 className={classes["footer-col__heading"]}>Newsletter</h3>
            <p>You can trust us. We only send promo offers</p>
            <div className={classes["footer-col__newsletter"]}>
              <label htmlFor="newsletter">
                <input
                  className={classes["footer-col__input"]}
                  type="email"
                  id="newsletter"
                  name="newsletter"
                  placeholder="Your Email Address"
                />
              </label>
              <Button className={classes.button}>Subscribe</Button>
            </div>
          </div>
        </section>
        <section className={classes["footer-bottom"]}>
          <div className={classes["footer-bottom__social"]}>
            {socialIcons.map(icon => {
              return (
                <img
                  width={25}
                  className={classes["icons"]}
                  key={icon.alt}
                  src={icon.src}
                  alt={icon.alt}
                />
              );
            })}
          </div>
          <small className={classes["footer-bottom__copyright"]}>
            Copyright {date} All rights reserved - BrightWater
          </small>
        </section>
      </div>
    </footer>
  );
}
