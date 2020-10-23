import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"



const styles = theme => ({
  
})

class Header extends Component {
  render() {
    const classes = this.props.classes;

    return (
      <div>
          this is header
      </div>
    );
  }
}


export default withStyles(styles)(Header);