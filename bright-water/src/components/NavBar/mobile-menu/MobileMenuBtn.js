import { useState } from "react";
import Button from "components/Button/Button";
import { menuIconOpen, menuIconClose } from "helpers/assets";
import classes from "./MobileMenuBtn.module.scss";

export default function MobileMenuBtn() {
  const [toggleIcon, setToggleIcon] = useState(true);

  const mobileMenuIcon = toggleIcon ? (
    <img src={menuIconOpen.src} alt={menuIconOpen.alt} />
  ) : (
    <img src={menuIconClose.src} alt={menuIconClose.alt} />
  );

  return (
    <Button onClick={() => setToggleIcon(!toggleIcon)} className={classes.mobileMenuBtn}>
      {mobileMenuIcon}
    </Button>
  );
}
