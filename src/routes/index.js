import { Switch, Route } from "react-router";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
// import Login from "../pages/Login";

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
        {/* <Route path="/login">
          <Login />
        </Route> */}
      </Switch>
    </div>
  );
};

export default Routes;
