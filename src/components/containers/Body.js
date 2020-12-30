import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "../pages/HomePage";



//user ROUTE to switch from different pages
class Body extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Homepage} />
        </Switch>
      </div>
      
    );
  }
}
export default Body;