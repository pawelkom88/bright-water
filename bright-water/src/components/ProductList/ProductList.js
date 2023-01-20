import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Spinner from "components/spinner/Spinner";
import ProductsFilter from "components/ProductsFilter/ProductsFilter";
import Select from "components/select/Select";
import Button from "components/Button/Button";
import { sortMethods } from "helpers/helpers";
import classes from "./productList.module.scss";

export default function ProductList({ products }) {
  const [sortState, setSortState] = useState("default");
  const [sortedProducts, setSortedProducts] = useState(null);

  useEffect(() => {
    if (products) {
      setSortedProducts(sortHandler(products));
    }
  }, [products, setSortedProducts, sortState]);

  function sortHandler(products) {
    return [...products].sort(sortMethods[sortState].method);
  }

  return (
    <main className="container">
      <section id="products">
        <h2 className={classes.heading}>We’ve got it all for you</h2>
        <div className={classes.productsFilter}>
          <ProductsFilter />
          <div className={classes.divider}></div>
          <Select onSort={setSortState} />
        </div>
        <div className={classes.products}>
          {sortedProducts?.length ? (
            sortedProducts.map(product => {
              return <ProductCard key={product.id} productDetails={product} />;
            })
          ) : (
            <Spinner />
          )}
        </div>
        <Button className={classes.button}>Load more</Button>
      </section>
    </main>
  );
}
