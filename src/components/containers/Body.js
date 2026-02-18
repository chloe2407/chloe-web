import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "../pages/HomePage.js";
import ErrorPage from "../pages/ErrorPage.js";
import Portfolio from "../pages/Portfolio.js";
import PortfolioProject from "../pages/parts/PortfolioProject.js";



//user ROUTE to switch from different pages
class Body extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/portfolio' exact component={Portfolio}>
            {/* <Route path=''component={Portfolio}/>
            <Route path=":postSlug" element={PortfolioProject} /> */}
          </Route>
          {/* <Route path='/portfolio/project' component={PortfolioProject}/> */}
          <Route path="/portfolio/:name" component={ (props) => (<PortfolioProject {...props}/>)} />
          <Route component={ErrorPage}/>
        </Switch>
      </div>
      
    );
  }
}
export default Body;