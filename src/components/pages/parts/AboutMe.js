import { makeStyles } from '@material-ui/core';
import {Typography, Grid } from '@material-ui/core';
import aboutme from "../../../assets/aboutme.jpg";

import React from 'react';
import Socials from "../cards/socials.js";

const useStyles = makeStyles(theme => ({
  root: {
    // [theme.breakpoints.up('lg')]: {
    //   // maxHeight: "90vh",
    //   overflow: "hidden",
    // }
    
  },
  text: {
    flex: 1,
    position: "relative",
    bottom: "10vh",
    [theme.breakpoints.up('sm')]: {
      top: "2vh",
      lineHeight: "160%",
    },
    [theme.breakpoints.up('md')]: {
      top: "10vh", 
      lineHeight: "200%"
    },
    [theme.breakpoints.up('lg')]: {
      top: "14vh",
      left: "2vw",
      maxWidth: "50%",
      lineHeight: "200%"

    },
  },
  img: {
    flex: 1,
    display: "none",
    width: "auto",
    height: "auto",
    [theme.breakpoints.up('lg')]: {
      display: "block",
      maxWidth: "50%",
      maxHeight: "auto",
    },
  }
  
}))



const AboutMe = props => {
  const classes = useStyles();
  return (
      <div className={classes.root}> 
      <Grid container>
        <Grid item xs/>
        <Grid item xs={10} sm={8} style={{display: "flex", flexDirection: "row"}}>
            <img className={classes.img} src={aboutme} alt="mefull"/>
            <div className={classes.text}>
              <Typography variant="h5">About Me</Typography>
              <Typography variant="p">Hi! I'm Chloe, a hardworking and dedicated 18-year-old who strives to constantly improve my technical skills, based in Vancouver, BC, Canada. </Typography><br/>
              <Typography variant="p">I have extensive experience volunteering at Geering Up as a Junior Instructor, related to coding and engineering, and internship work experiences at technology-related startup companies, like CodeCa and ELIX. As a current Innovator at The Knowledge Society, I learn about numerous emerging technologies and learn essential life skills, such as leadership and networking. One way I develop these skills is through various hackathons hosted by TKS, like the AI Hackathon and City Challenge.</Typography><br/><br/>
              <Typography variant="p">I am always curious to learn new things! Let's chat!</Typography>
              <Socials/>
            </div>
        </Grid>
        <Grid item xs/>
      </Grid>
        
      </div>
  )};
  export default AboutMe;