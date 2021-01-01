import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import ScrollArrow from './cards/scroll';
import { Link } from 'react-router-dom';
import penguin from "../../assets/penguin.png";
 
const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
}))



const ErrorPage = props =>{
  const classes = useStyles();
  const MouseOver = (event) => {
    event.target.style.color = 'cyan';

  }
  const MouseOut = (event) => {
    event.target.style.color = '';

  }
  return (
    <div className={classes.root}>
      <ScrollArrow/>
      <Typography variant="h1">404 (Error)</Typography>
      <img src={penguin} alt="penguin" style={{width: "20%", padding: "2vh 0"}}/>
      <Link to="/" style={{textDecoration: "none", color: "black"}} onMouseOver={MouseOver} onMouseOut={MouseOut}><Typography variant="h6">Go back to HomePage</Typography></Link>
    </div>
    
  );
}

export default ErrorPage;