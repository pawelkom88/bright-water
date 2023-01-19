import { useState } from "react";
import Button from "components/Button/Button";
import { filterIcon } from "helpers/assets";
import classes from "./ProductsFilter.module.scss";
import SidebarMenu from "components/sidebar-menu/Sidebar-menu";

export default function ProductFilter() {
  const [toggleFilterMenu, setToggleFilterMenu] = useState(false);

  function handleFilterToggle() {
    setToggleFilterMenu(true);
  }

  return (
    <>
      <Button onClick={handleFilterToggle} className={classes.filterIcon}>
        <img src={filterIcon.src} alt={filterIcon.alt} />
      </Button>

      <SidebarMenu onToggle={setToggleFilterMenu} condition={toggleFilterMenu}>
        Filters
      </SidebarMenu>
    </>
  );
}
