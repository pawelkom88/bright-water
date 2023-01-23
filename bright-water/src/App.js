import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages/home/Home";
import NavBar from "components/NavBar/Nav-bar";
import Footer from "components/Footer/Footer";
import About from "pages/about/About";
import ProductPage from "pages/product-page/ProductPage";
import NotFound from "pages/404/NotFound";
import { navItems } from "helpers/helpers";
import "styles/App.scss";
import Checkout from "pages/checkout/Checkout";

const App = () => {
  const [addToCart, setAddToCart] = useState([]);

  return (
    <>
      <Router>
        <NavBar cartItems={addToCart} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/product/:id">
            <ProductPage cartItems={addToCart} onAdd={setAddToCart} />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer navItems={navItems} />
      </Router>
    </>
  );
};

export default App;
