import { makeStyles } from '@material-ui/core';
import {Typography, Grid } from '@material-ui/core';
import aboutme from "../../../assets/aboutme1.jpg";

import React from 'react';
import Socials from "../cards/socials.js";

const useStyles = makeStyles(theme => ({
  root: {
    
  },
  text: {

    [theme.breakpoints.up('sm')]: {
      lineHeight: "160%",
    },
    [theme.breakpoints.up('md')]: {
      lineHeight: "200%"
    },
    [theme.breakpoints.up('lg')]: {
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
      maxWidth: "100%",
      maxHeight: "auto",
    },
  },
  imgCont: {
    [theme.breakpoints.up('lg')]: {
      width: "35vw",
      height: "85vh"
    }

  }
  
}))


const AboutMe = props => {
  const classes = useStyles();
  return (
      <div className={classes.root}> 
      <Grid container>
        <Grid item xs/>
        <Grid item xs={10} sm={8} style={{display: "flex", flexDirection: "row"}}>
            {/* <div className={classes.imgCont}><img className={classes.img} src={aboutme} alt="mefull"/></div> */}
            <div className={classes.text}>
              <Typography variant="h3">About Me</Typography>
              <Typography variant="p">Hi! I'm Chloe, a hardworking and dedicated student who strives to constantly improve my technical skills, based in Toronto, ON, Canada. </Typography><br/>
              <Typography variant="p">As an undergraduate student specializing in Computer Science with a Mathematics and Statistics minor, I work with like minded peers at the University of Toronto on various projects like <a href="https://github.com/CSC207-2022F-UofT/course-project-group-80" target="_blank">this one</a>! </Typography><br/>
              {/* <Typography variant="p">Within the UofT community, I have experiences within clubs of interest, such as being the Webmaster for University College Literary and Athletic Society and Cybersecurity Student Association at the University of Toronto, as well as Marketing Associate for UofT Artifical Intelligence Club.</Typography><br/> */}

              {/* <Typography variant="p">Extensive experience teaching STEM camps and internship work experiences at technology-related companies. Learned about numerous emerging technologies, leadership, and networking through partipation at The Knowledge Society and various Hackathons.</Typography><br/> */}
              <Typography variant="p">I am always curious to learn new things! Let's chat!</Typography>
              <Socials/>
            </div>
        </Grid>
        <Grid item xs/>
      </Grid>
        
      </div>
  )};
  export default AboutMe;