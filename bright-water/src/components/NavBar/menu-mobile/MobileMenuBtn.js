import { useState } from "react";
import Button from "components/Button/Button";
import SidebarMenu from "components/sidebar-menu/Sidebar-menu";
import { menuIconOpen } from "helpers/assets";
import classes from "./MobileMenuBtn.module.scss";

export default function MobileMenuBtn() {
  const [toggleIcon, setToggleIcon] = useState(false);

  return (
    <>
      <Button onClick={() => setToggleIcon(!toggleIcon)} className={classes["mobile-menu-button"]}>
        <img src={menuIconOpen.src} alt={menuIconOpen.alt} />
      </Button>
      <SidebarMenu onToggle={setToggleIcon} condition={toggleIcon}>
        Menu
      </SidebarMenu>
    </>
  );
}
