import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomepageImage from "../pages/HomePage";

import HomePage from "../pages/HomePage";


//user ROUTE to switch from different pages
class Body extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomepageImage} />
      </Switch>
    );
  }
}
export default Body;