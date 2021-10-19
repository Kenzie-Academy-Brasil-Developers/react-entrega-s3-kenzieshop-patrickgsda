import { Switch, Route } from "react-router";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Logged from "../pages/Logged";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/logged">
          <Logged />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
