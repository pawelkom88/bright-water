import classes from "./Select.module.scss";

export default function Select() {
  return (
    // change default value to Sort By / fix hover
    <select defaultValue="Sort By" className={classes.select}>
      <option value="ASC">Product Name - ASC</option>
      <option value="DESC">Product Name - DESC</option>
      <option value="PRICE">Product Price</option>
    </select>
  );
}
