import { makeStyles } from '@material-ui/core';
import {Typography } from '@material-ui/core';

import React from 'react';
import pitch from "../../assets/pitch.jpg";

import ReactTypingEffect from 'react-typing-effect';

 
const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    // textAlign: "center",
  },
  centered: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.up('md')]: {
      fonstSize: "13vw",
      top: "30%",
      left: "20%",
    },
    [theme.breakpoints.down('md')]: {
      fontSize: "8vw",
      top: "30%",
      left:"20%",
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: "50px",
      top: "40%",
      left:"30%",
    },
   
  },
    
  text: {
    position: "absolute",
    
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.up('md')]: {

      bottom: "30%",
      left:"15%",
    },
    [theme.breakpoints.down('md')]: {

      top: "30%",
      left:"20%",
    },
    [theme.breakpoints.down('xs')]: {
      top: "40%",
      left:"30%",
    },
  },
  
}))



const HeadingImage = props => {
  const classes = useStyles();
  return (
      <div className={classes.root}> 
        <img src={pitch} style={{width: "100%"}} alt='me' id="me" />
        <Typography variant="h1" className={classes.centered}>Chloe Lam</Typography>

        <ReactTypingEffect
          text={["innovator", "passionate learner", "tech lover"]}
          className={classes.text}
          cursorRenderer={cursor => <Typography variant="h4" >{cursor}</Typography>}
          displayTextRenderer={(text, i) => {
            return (
              <Typography variant="h4" >
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