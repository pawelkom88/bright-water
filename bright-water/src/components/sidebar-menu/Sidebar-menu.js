import Button from "components/Button/Button";
import { CloseIcon } from "helpers/assets";
import classes from "./Sidebar-menu.module.scss";

export default function SidebarMenu({ onToggle, condition, children }) {
  return (
    <aside
      onClick={e => e.stopPropagation()}
      className={`${condition && classes.active} ${classes.sidebar}`}>
      <Button onClick={() => onToggle(false)} className={classes["sidebar-icon"]}>
        <img src={CloseIcon.src} alt={CloseIcon.alt} />
      </Button>
      <div className={classes["sidebar-content"]}>{children}</div>
    </aside>
  );
}
