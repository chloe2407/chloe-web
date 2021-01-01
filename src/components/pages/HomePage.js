import { makeStyles } from '@material-ui/core';
import React from 'react';
import ScrollArrow from './cards/scroll.js';
import HeadingImage from './parts/HeadingImage.js';
import AboutMe from './parts/AboutMe.js';
 
const useStyles = makeStyles(theme => ({
  space: {
    [theme.breakpoints.up('md')]: {
      height: "10vh"
    }
  }
}))

const Homepage = props =>{
  const classes = useStyles();
  return (
    <div>
      <ScrollArrow/>
      <HeadingImage/>
      <AboutMe/>
      <div className={classes.space}/>
      {/* mission */}
      {/* newsletters */}
      {/* highlights of portfolio */}
    </div>
    
  );
}

export default Homepage;