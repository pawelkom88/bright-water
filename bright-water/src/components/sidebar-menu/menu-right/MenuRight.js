import Button from "components/Button/Button";
import Overlay from "components/modal/Overlay";
import { CloseIcon } from "helpers/assets";
import classes from "../Sidebar-menu.module.scss";

export default function MenuRight({ condition, onToggle, children }) {
  const sidebarDirection = condition ? classes[`right-menu-active`] : "";

  return (
    <>
      {condition && <Overlay onClose={onToggle} />}
      <aside
        style={{ right: condition ? "0" : "-400px" }}
        onClick={e => e.stopPropagation()}
        className={`${sidebarDirection} ${classes["sidebar"]}`}>
        <Button className={classes["sidebar-icon"]} onClick={onToggle}>
          <img src={CloseIcon.src} alt={CloseIcon.alt} />
        </Button>
        <div className={classes["sidebar-content"]}>{children}</div>
      </aside>
    </>
  );
}
