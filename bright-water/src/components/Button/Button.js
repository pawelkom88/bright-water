import classes from "./Button.module.scss";

export default function Button({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={`${classes.button} ${className}`}>
      {children}
    </button>
  );
}
