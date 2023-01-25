import { useEffect } from "react";
import Button from "components/Button/Button";
import { CloseIcon } from "helpers/assets";
import classes from "./Notification.module.scss";

const dangerClr = "#dc3545";
const successClr = "#28a745";

export default function Notification({ heading, children, onNotify, time, warning = false }) {
  useEffect(() => {
    const timer = setTimeout(() => onNotify(false), time);

    return () => clearTimeout(timer);
  }, [onNotify, time]);

  return (
    <div className={classes.notification}>
      <div className={classes["notification-message"]}>
        <h3
          style={{ color: `${warning ? dangerClr : successClr}` }}
          className={classes["notification-message__heading"]}>
          {heading}
        </h3>
        <p className={classes["notification-message__content"]}>{children}</p>
      </div>
      <Button className={classes["notification-message__btn"]} onClick={() => onNotify(false)}>
        <img src={CloseIcon.src} alt={CloseIcon.alt} />
      </Button>
    </div>
  );
}
