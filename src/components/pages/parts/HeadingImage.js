import { makeStyles } from '@material-ui/core';
import {Typography, Grid, Button } from '@material-ui/core';

import React from 'react';
import pic from "../../../assets/profile1.jpg";
import resume from "../../../assets/resume.pdf";
import image from "../../../assets/background1.png"; 



import ReactTypingEffect from 'react-typing-effect';


 
const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
  },
  largeScreenSpace: {
    margin: "10vw 0vw",
  },
  img: {
    borderRadius: "50%",
    width: "60%",
    height: "auto",
    // display: "block",
    // marginRight: "200vw",
    // marginRight: "auto",
    zIndex: 1,
    display: "none",
    [theme.breakpoints.up('sm')]: {
      // width: "35%",
      
      
    },
    [theme.breakpoints.up('md')]: {
      width: "45%",
      marginLeft: "25vw",
      display: "block"
    },
  },
  layout: {
    display: "flex", 
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up('md')]: {
      flexDirection: "row-reverse",
      },
  },
  leftName: {
    width: "100%",
    height: "auto",
    display: "none",
    position: "relative",
    [theme.breakpoints.up('md')]: {
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
    marginLeft: "15vw", 
    marginRight: "auto",
    display: "block",
    [theme.breakpoints.up('md')]: {
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
    [theme.breakpoints.up('lg')]: {
      left: "18vw",
    },
  },
  title: {
    [theme.breakpoints.up('md')]: {
      fontSize: "3vw",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "5vw",
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
  background: {
    height:"90vh",
    backgroundImage:`url(${image})`,
     backgroundRepeat:"no-repeat",
      backgroundSize:"cover"
  },
}))
const HeadingImage = props => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <div className={classes.background}>
        <Grid container className={classes.layout}>
          <Grid item xs={12} sm={6} md={6} lg={6} className={classes.largeScreenSpace}>
            <img src={pic} className={classes.img} alt="profilepic"/>
          </Grid>
          <Grid item style={{display: "flex", flexDirection: "column", alignContent: "center"}}  className={classes.largeScreenSpace}>
            <div className={classes.text}>
              <Typography variant='h2' className={classes.title}>Chloe Lam</Typography>
              <Typography variant="p">Computer Science, Mathematics, Statistics</Typography>
            </div>
            <ReactTypingEffect
              text={[" innovator", " passionate learner", " tech-lover"]}
              speed={70}
              eraseSpeed={10}
              typingDelay={10}
              eraseDelay={2000}
              cursorRenderer={cursor => <Typography variant="h5" className={classes.text}>{cursor}</Typography>}
              displayTextRenderer={(text, i) => {
                return (
                  <Typography variant="h5" className={classes.text}>
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
            <Button className={classes.button} variant="outlined" size="large" color="primary"><a style={{textDecoration: "none", color: "inherit"}} href={resume} download="Chloe_Lam_Resume">My resume</a></Button>
        </Grid>
        </Grid>
        {/* <hr className={classes.dashed}></hr> */}
        </div>
      </div>
  )};
  export default HeadingImage;