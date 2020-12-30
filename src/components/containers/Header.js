import React, { Component } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Nav from "../pages/navbar.js";


const useStyles = makeStyles ({
  root: {

  }
})

const Header = () => {
    const classes = useStyles();

    return (
      <div>
          <Nav/>
      </div>
    );
}


export default Header;