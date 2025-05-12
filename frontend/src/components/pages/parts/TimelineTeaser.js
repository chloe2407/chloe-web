import { makeStyles } from '@material-ui/core';
import {Typography, Grid, Button } from '@material-ui/core';

import React from 'react';
import { Link } from 'react-router-dom';
import avatar from "../../../assets/myicon.png";
import ReactTypingEffect from 'react-typing-effect';
 
const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
  },
  img: {
    width: "60%",
    height: "auto",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up('md')]: {
      width: "50%",
    //   position: "relative",
    //   right: "10vw",

    }
  },
  layout: {
    display: "flex", 
    flexDirection: "column",
    [theme.breakpoints.up('sm')]: {
      flexDirection: "row",
      },
  },
  text: {
    display: "none",
    position: "relative", 
    [theme.breakpoints.up('sm')]: {
        display: "block",
        top: "3vh",
        fontSize: "6vw",
    },
    [theme.breakpoints.up('md')]: {
      top: "5vh",
      right: "2vw",
    },
},
  button: {
    marginLeft: "auto", 
    marginRight: "auto",
    width: "80%",
    position: "relative", 
    top: "2.4rem",
    [theme.breakpoints.up('sm')]: {
      top: "5vh",
      right: "4vw",
    },
    [theme.breakpoints.up('md')]: {
        width: "100%",
        top: "6vh",
        right: "2vw",

      }, 
  },
  dashed: {
    borderTop: "3px dashed #bbb",
    position: "relative",
    bottom: "10vh",
    [theme.breakpoints.up('sm')]: {
      top: "2vh",
    },
    [theme.breakpoints.up('md')]: {
      top: "4vh",
    }   
  },
  link: {
    textDecoration: "none", 
    color: "inherit",
  },
}))
const TimelineTeaser = props => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Grid container className={classes.layout}>
          <Grid item xs={12} sm={7} md={6}  >
            <img src={avatar} className={classes.img} alt="avatar"/>
          </Grid>
          <Grid item xs={12} sm={5} md={6}  style={{display: "flex", flexDirection: "column"}}>
          <ReactTypingEffect
              text={"Learn more about me here!"}
              speed={70}
              eraseSpeed={0}
              typingDelay={1}
              eraseDelay={4000}
              cursorRenderer={cursor => <Typography variant="h1" className={classes.text}>{cursor}</Typography>}
              displayTextRenderer={(text, i) => {
                return (
                  <Typography variant="h1" className={classes.text}>
                    {text.split('').map((char, i) => {
                      const key = `${i}`;
                        return (
                          <span
                            key={key}
                          >{char}</span>
                        );
                    })}
                  </Typography>
                );
              }}        
            />
            <Button className={classes.button} variant="outlined" size="large" color="primary"><Link to="/timeline" className={classes.link}>Explore my timeline</Link></Button>
        </Grid>
        </Grid>
        <hr className={classes.dashed}></hr>
      </div>
  )};
  export default TimelineTeaser;