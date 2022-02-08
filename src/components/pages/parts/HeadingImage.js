import { makeStyles } from '@material-ui/core';
import {Typography, Grid, Button } from '@material-ui/core';

import React from 'react';
import pic from "../../../assets/profile3.jpeg";
import name from "../../../assets/name.png";
import resume from "../../../assets/resume.pdf";


import ReactTypingEffect from 'react-typing-effect';


 
const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
  },
  img: {
    borderRadius: "50%",
    width: "60%",
    height: "auto",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      width: "50%",
    },
    [theme.breakpoints.up('md')]: {
      width: "40%",

    }
  },
  layout: {
    display: "flex", 
    flexDirection: "column",
    [theme.breakpoints.up('sm')]: {
      flexDirection: "row-reverse",
      },
  },
  leftName: {
    width: "100%",
    height: "auto",
    display: "none",
    position: "relative",
    [theme.breakpoints.up('sm')]: {
      display: "block",
      left: "7vw",
    },
    [theme.breakpoints.up('lg')]: {
      left: "10vw",
    },
  },
  rightName: {
    position: "relative", 
    bottom: "17vh", 
    zIndex: 2, 
    marginLeft: "auto", 
    marginRight: "auto",
    display: "block",
    [theme.breakpoints.up('sm')]: {
      display: "none",
    },
  },
  text: {
    position: "relative", 
    bottom: "11vh", 
    left: "25vw",
    [theme.breakpoints.up('sm')]: {
      top: "1vh", 
      left: "16vw",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "3vw",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "3vw",
      left: "18vw",
    },
  },
  button: {
    marginLeft: "auto", 
    marginRight: "auto",
    width: "50%",
    position: "relative", 
    bottom: "8vh", 
    [theme.breakpoints.up('sm')]: {
      top: "2vh", 
      left: "16vw",
      marginLeft: "0", 
    },
    [theme.breakpoints.up('md')]: {
      left: "20vw",
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
  }
}))
const HeadingImage = props => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <div className={classes.background}>
        <Grid container className={classes.layout}>
          <Grid item xs={12} sm={6} md={6} lg={6} >
            <img src={pic} className={classes.img} alt="profilepic"/>
            <img className={classes.rightName} src={name} alt="myname"/>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} style={{display: "flex", flexDirection: "column"}}>
          <img className={classes.leftName} alt="myname" src={name}/>
            <ReactTypingEffect
              text={[" innovator", " passionate learner", " tech-lover"]}
              speed={70}
              eraseSpeed={10}
              typingDelay={10}
              eraseDelay={2000}
              cursorRenderer={cursor => <Typography variant="h5" className={classes.text}>{cursor}</Typography>}
              displayTextRenderer={(text, i) => {
                return (
                  <Typography variant="h5" className={classes.text}>18-year-old 
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
            <Button className={classes.button} variant="outlined" size="large" color="primary"><a style={{textDecoration: "none", color: "inherit"}} href={resume} download="Chloe_Lam_Resume_December_2020">My resume</a></Button>
        </Grid>
        </Grid>
        <hr className={classes.dashed}></hr>
        </div>
      </div>
  )};
  export default HeadingImage;