import React from "react";
import { makeStyles, Typography } from '@material-ui/core';
import Socials from "../pages/cards/socials";

import { Link } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  everything: {
    maxWidth: "100%",
    backgroundColor: "#f6f6f6", 
    color: "#023246",
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    justifyContent: "center", 
    textAlign: "center",
  },
  root: {
    maxWidth: "100%",
    display: "flex", 
    flexDirection: "column", 
    [theme.breakpoints.up('md')]: {
      flexDirection: "row",
      justifyContent: "center",
    }
  },
  title: {
    fontSize: "6vw",
    paddingBottom: "2vh",
    [theme.breakpoints.up('md')]: {
      fontSize: "5vw",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "4vw",
    }
  },
  links: {
    textDecoration: "none", 
    color: "white",
    padding: "0 2vw"
  },
  subscribe: {
    backgroundColor: "transparent",
    [theme.breakpoints.up('md')]: {
      flexDirection: "column",
      width: "50vw",
    },

  },
  condrow: {
    display: "flex", 
    flexDirection: "column",
    flexWrap: "wrap",
    [theme.breakpoints.up('md')]: {
      paddingTop: "3vh",
    }
  },
  linkrow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%"
  },
  socialsHidden: {
    display: "none",
    [theme.breakpoints.up('md')]: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
    }
  },
  socialsShow: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    [theme.breakpoints.up('md')]: {
      display: "none",
    }
  }
}))

const Footer = () => {
  const classes = useStyles();

  const MouseOver = (event) => {
    event.target.style.color = '#944646';
  }
  const MouseOut = (event) => {
    event.target.style.color = '';
  }
  
  return (
    <div className={classes.everything}>
      <hr/>
      <Typography variant="h1" className={classes.title}>Stay up to date with me</Typography>
      <div className={classes.root}>
        <div className={classes.subscribe}>
          <iframe src="https://chloelam.substack.com/embed" width="100%" height="200" className={classes.subscribe} frameborder="0" scrolling="no"></iframe>
        </div>
        <div className={classes.condrow}>
          <div className={classes.linkrow}>
            <Link to="/" onMouseOver={MouseOver} onMouseOut={MouseOut} className={classes.links}>
              <Typography color="primary" variant="h6" noWrap>Home</Typography>
            </Link>
            <Link to="/portfolio" onMouseOver={MouseOver} onMouseOut={MouseOut} className={classes.links}>
              <Typography color="primary" variant="h6" noWrap>Portfolio</Typography>
            </Link>
            <Link to="/connect" onMouseOver={MouseOver} onMouseOut={MouseOut} className={classes.links}>
              <Typography color="primary" variant="h6" noWrap>Connect</Typography>
            </Link>
          </div>
          <div className={classes.socialsHidden}><Socials/></div>
        </div>
      </div>
      <div>
        <Typography color="primary" variant="h6" style={{width: "100%", padding: "2vw"}}>©2024 Copyright Chloe Lam. All Rights Reserved.</Typography>
        <div className={classes.socialsShow}><Socials/></div>
      </div>
    </div>
  );
};

export default Footer;
