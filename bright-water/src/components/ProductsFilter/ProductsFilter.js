import { useState } from "react";
import Button from "components/Button/Button";
import { filterIcon } from "helpers/assets";
import classes from "./ProductsFilter.module.scss";
import MenuLeft from "components/sidebar-menu/menu-left/MenuLeft";

export default function ProductFilter() {
  const [toggleFilterMenu, setToggleFilterMenu] = useState(false);

  function handleFilterMenu() {
    setToggleFilterMenu(!toggleFilterMenu);
  }

  return (
    <>
      <Button onClick={handleFilterMenu} className={classes.filterIcon}>
        <img src={filterIcon.src} alt={filterIcon.alt} />
      </Button>

      <MenuLeft onToggle={handleFilterMenu} condition={toggleFilterMenu}>
        FILTERS
      </MenuLeft>
    </>
  );
}
