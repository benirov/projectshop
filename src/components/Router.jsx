import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./index";
import checkOut from "./CheckOut";
import CardViewShopping from "./CardViewShopping";

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/checkout" component={checkOut} />
      <Route path="/viewshopping" component={CardViewShopping} />
    </div>
  </Router>
);

export default Routes;