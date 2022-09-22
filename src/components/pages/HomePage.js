import { makeStyles } from '@material-ui/core';
import React from 'react';
import ScrollArrow from './cards/scroll.js';
import HeadingImage from './parts/HeadingImage.js';
import AboutMe from './parts/AboutMe.js';
import Newsletters from './parts/Newsletters.js';
import FeaturedWorks from './parts/FeaturedWorks.js';

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
      <div className={classes.space}/>
      <AboutMe/>
      <div className={classes.space}/>
      <FeaturedWorks/>
      {/* mission */}
      {/* <Newsletters/> */}
      
    </div>
    
  );
}

export default Homepage;