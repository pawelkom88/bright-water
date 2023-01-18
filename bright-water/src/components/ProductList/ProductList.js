import useFetch from "hooks/useFetch";
import ProductCard from "../ProductCard/ProductCard";
import Spinner from "components/spinner/Spinner";
import ProductsFilter from "components/ProductsFilter/ProductsFilter";
import Select from "components/select/Select";
import Button from "components/Button/Button";
import classes from "./productList.module.scss";

export default function ProductList() {
  const { products } = useFetch();

  return (
    <main className="container">
      <section id="products">
        <h2 className={classes.heading}>We’ve got it all for you</h2>
        <div className={classes.productsFilter}>
          <ProductsFilter />
          <div className={classes.divider}></div>
          <Select />
        </div>
        <div className={classes.products}>
          {products.length ? (
            products.map(product => {
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
