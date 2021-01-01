import { makeStyles } from '@material-ui/core';
import {Button } from '@material-ui/core';

import React from 'react';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Email from '@material-ui/icons/Email';
import TKS from '@material-ui/icons/AccountCircle';
import Medium from '@material-ui/icons/Description';
import GitHub from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
  logo: {
    maxWidth: "5vw",
    maxHeight: "5vw",
    [theme.breakpoints.up('sm')]: {
      maxWidth: "3vw",
      maxHeight: "3vw",
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: "2vw",
      maxHeight: "2vw",
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: "1.2vw",
      maxHeight: "1.2vw",
    },
  },
  link: {
    textDecoration: "none", 
    color: "inherit",
  }
  
}))



const Socials = props => {
  const classes = useStyles();
  const MouseOver = (event) => {
    event.target.style.color = 'cyan';
  }
  const MouseOut = (event) => {
    event.target.style.color = '';
  }
  return (
      <div style={{display: "flex", flexDirection: "row"}}> 
        <Button onMouseOver={MouseOver} onMouseOut={MouseOut}><a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chloe-lam-2407/"><LinkedIn/></a></Button>
        <Button onMouseOver={MouseOver} onMouseOut={MouseOut}><a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://medium.com/@chloelam2407"><Medium/></a></Button>
        <Button onMouseOver={MouseOver} onMouseOut={MouseOut}><a className={classes.link} target="_blank" rel="noopener noreferrer" href="mailto:chloelam2407@gmail.com"><Email/></a></Button>
        <Button onMouseOver={MouseOver} onMouseOut={MouseOut}><a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://tks.life/profile/chloe.lam#about"><TKS/></a></Button>
        <Button onMouseOver={MouseOver} onMouseOut={MouseOut}><a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://github.com/chloe2407"><GitHub/></a></Button>               
      </div>
  )};
  export default Socials;