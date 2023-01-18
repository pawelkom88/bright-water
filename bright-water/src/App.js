import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import About from "./pages/about/About";
import ProductPage from "./pages/product-page/ProductPage";
import useFetch from "./hooks/useFetch";
import { navItems } from "./helpers/helpers";
import "./styles/App.css";

const App = () => {
  //Here is the product list data :)
  const { products } = useFetch();

  return (
    <>
      <Router>
        <NavBar navItems={navItems} />
        <Switch>
          <Route exact path="/">
            <Home productData={products} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/product/:id">
            <ProductPage />
          </Route>
        </Switch>
        <Footer navItems={navItems} />
      </Router>
    </>
  );
};

export default App;
