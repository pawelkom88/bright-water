import classes from "./Select.module.scss";

export default function Select({ onSort }) {
  return (
    <select
      onChange={e => onSort(e.target.value)}
      defaultValue="default"
      className={classes.select}>
      <option value="default" disabled>
        Sort By
      </option>
      <option value="ascending">Product Name - ASC</option>
      <option value="descending">Product Name - DESC</option>
      <option value="price">Product Price</option>
    </select>
  );
}
