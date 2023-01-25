import classes from "./ColorCircle.module.scss";

export default function ColorCircle({ onSet, code }) {
  return (
    <div
      onClick={() => onSet(code)}
      tabIndex={0}
      style={{
        backgroundColor: code.hex,
      }}
      className={classes.circle}></div>
  );
}
