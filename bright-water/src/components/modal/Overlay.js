import classes from "./Overlay.module.scss";

export default function Overlay({ children, onClose }) {
  return (
    <div onClick={onClose} className={classes.overlay}>
      {children}
    </div>
  );
}
