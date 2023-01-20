import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Spinner from "components/spinner/Spinner";
import ProductsFilter from "components/ProductsFilter/ProductsFilter";
import Select from "components/select/Select";
import Button from "components/Button/Button";
import classes from "./productList.module.scss";
import { sortMethods } from "helpers/helpers";

export default function ProductList({ products }) {
  const [sortState, setSortState] = useState("default");
  const [sortedProducts, setSortedProducts] = useState(null);

  // Check whether products has been fetched and then update local state
  useEffect(() => {
    if (products) {
      setSortedProducts(products);
    }
  }, [products]);

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
            sortedProducts.sort(sortMethods[sortState].method)
              .map(product => {
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
