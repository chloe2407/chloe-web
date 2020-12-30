import { makeStyles } from '@material-ui/core';
import {Typography } from '@material-ui/core';

import React from 'react';
import pitch from "../../assets/pitchc.jpg";

import ReactTypingEffect from 'react-typing-effect';

 
const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    // textAlign: "center",
  },
  img: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    opacity: 0.6,
    [theme.breakpoints.up('sm')]: {
      width: "80%",
    },
    [theme.breakpoints.up('md')]: {
      width: "70%",
      backgroundColor: "yellow",
    }
  },
  centered: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    fontSize: "7vw",
    top: "20%",
    left:"25%",
    [theme.breakpoints.up('sm')]: {
      fontSize: "7vw",
      top: "18%",
      left:"30%",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "6vw",
      top: "15%",
      left:"33%",
    },
  },
    
  text: {
    textAlign: "left",
    position: "absolute",
    top: "50%",
    left:"8%",
    [theme.breakpoints.up('sm')]: {
      top: "50%",
      left:"14%",
    },
    [theme.breakpoints.up('md')]: {
      top: "50%",
      left:"20%",
    },
  },
  atext: {
    fontSize: "5vw",
    [theme.breakpoints.up('md')]: {
      fontSize: "4.5vw",
    },
  },
  
}))



const HeadingImage = props => {
  const classes = useStyles();
  return (
      <div className={classes.root}> 
        <img src={pitch} className={classes.img} alt='me' id="me" />
        <Typography variant="h1" className={classes.centered}>Chloe Lam</Typography>

        <ReactTypingEffect
          text={["innovator", "passionate learner", "tech lover"]}
          className={classes.text}
          cursorRenderer={cursor => <Typography variant="h5" className={classes.atext}>{cursor}</Typography>}
          displayTextRenderer={(text, i) => {
            return (
              <Typography variant="h5" className={classes.atext}>
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
        
      </div>
  )};
  export default HeadingImage;