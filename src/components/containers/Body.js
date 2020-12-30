import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "../pages/HomePage.js";
import Connect from "../pages/Connect.js";
import Portfolio from "../pages/Portfolio.js"



//user ROUTE to switch from different pages
class Body extends Component {
  render() {
    return (
      <div>
        <div style={{minHeight: 70}}></div>
        hiiii
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/connect" exact component={Connect} />
          <Route path="/portfolio" exact component={Portfolio} />

        </Switch>
      </div>
      
    );
  }
}
export default Body;