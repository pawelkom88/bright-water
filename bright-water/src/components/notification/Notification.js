import Button from "components/Button/Button";
import { CloseIcon } from "helpers/assets";
import classes from "./Notification.module.scss";
import { useEffect } from "react";

export default function Notification({ heading, children, onNotify }) {
  useEffect(() => {
    const timer = setTimeout(() => onNotify(false), 5000);

    return () => clearTimeout(timer);
  }, [onNotify]);

  return (
    <div className={classes.notification}>
      <div className={classes["notification-message"]}>
        <h3 className={classes["notification-heading"]}>{heading}</h3>
        <p className="">{children}</p>
      </div>
      <Button className={classes["notification-message__btn"]} onClick={() => onNotify(false)}>
        <img src={CloseIcon.src} alt={CloseIcon.alt} />
      </Button>
    </div>
  );
}
