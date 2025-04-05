import { makeStyles } from '@material-ui/core';
import {Typography, Grid } from '@material-ui/core';
import patientapp from "../../../assets/portfolio/patientapp.png";
import uclit from "../../../assets/portfolio/uclit.png";
import uoftinder from "../../../assets/portfolio/uoftinder.png";
import codeca from "../../../assets/portfolio/c3d_web.png";
import vrrc from "../../../assets/portfolio/vrrc.png";


import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    
  },
  text: {
    flex: 2, // Adjust the flex value to take up more space
    padding: theme.spacing(2), // Adding padding for better readability
    [theme.breakpoints.up('lg')]: {
      maxWidth: "60%", // Adjust the maximum width for larger screens
    },
  },
  img: {
    flex: 1,
    display: "block",
    width: "100%", // Adjust the width of the image to take up the available space
    [theme.breakpoints.up('lg')]: {
      display: "block",
      maxWidth: "100%",
      height: "auto",
    },
  },
  imgCont: {
    flex: 1,
    margin: "2vw"

  },
  projectChunk: {
    display: "flex", 
    flexDirection: "column",
    [theme.breakpoints.up('md')]: {
      flexDirection: "row"
    },
  }
  
}))


const AboutRecentProjects = props => {
  const classes = useStyles();
  return (
      <div className={classes.root}> 
      <Typography variant="h3" style={{justifyContent: "center",textAlign: "center",}}>Recent Projects</Typography>
      {/* VRRC - Volcano Detection */}
      <Grid container>
        <Grid item xs/>
        <Grid item xs={10} sm={8} className={classes.projectChunk}>
            <div className={classes.imgCont}>
                <Typography variant="h5">VRRC (Natural Resources Canada (NRCan))</Typography>
                <img className={classes.img} src={vrrc} alt="vrrc"/>
            </div>
            <div className={classes.text}>
              <Typography variant="p">For eight months (May 2024 to December 2024), I worked with Natural Resources Canada (NRCan) to develop tools for satellite-based monitoring and analysis of volcanic activity in Canada. </Typography>
              <Typography variant="p">I led a UI design session with over eight scientists to build a user-centered observation log tab using Figma and Dash/Python, which improved dashboard usability by 25%. </Typography>
              <Typography variant="p">I further enhanced the dashboard by incorporating Government of Canada branding, a streamlined legend, glacier footprint integration, and a more accurate summary table. </Typography> 
              <Typography variant="p">Additionally, I developed a scalable real-time inference pipeline for processing RCM InSAR data using Docker and AWS, optimizing image resolution, coordinate systems, </Typography>
              <Typography variant="p">and machine learning models to refine displacement analysis and support automated volcanic unrest detection. </Typography>
              <Typography variant='p'>From January 2025 to the present, I have continued this work through my CSC495 Computer Science project at the University of Toronto, in collaboration with NRCan, </Typography>
              <Typography variant='p'>focusing on improving model performance and deploying an end-to-end automated detection system for volcanic unrest.</Typography>
            </div>
        </Grid>
        <Grid item xs/>
      </Grid>
      {/* PATIENT APP */}
      <Grid container>
        <Grid item xs/>
        <Grid item xs={10} sm={8} className={classes.projectChunk}>
            <div className={classes.imgCont}>
                <Typography variant="h5">Patient App (BC Renal, Provincial Health Services Authority)</Typography>
                <img className={classes.img} src={patientapp} alt="patient app"/>
            </div>
            <div className={classes.text}>
              <Typography variant="p">For four months in Summer 2023 (May to August), I worked with BC Renal to develop a new Flutter Application to enhance patient treatment, collaborating closely with a UX designer to implement user-friendly designs. </Typography>
              <Typography variant="p">During my time there, I implemented Project Structure based on SOLID Design Principles and Clean Architecture, resulting in efficient code organization and future scalability. </Typography>
              <Typography variant="p">I also created comprehensive Documentation for the application, ensuring clear communication of app functionality and progress to future developers. </Typography>
              <Typography variant="p">Every month, I presented the application progress to a large development team, showcasing effective communication skills and the ability to explain complex technical concepts clearly. </Typography>
              <Typography variant="p">By the end of the project, I demonstrated strong Technical Aptitude with Flutter and Dart for app development and implementing Firebase for efficient data storage and retrieval. </Typography>
            </div>
        </Grid>
        <Grid item xs/>
      </Grid>

      {/* UCLIT */}
      <Grid container>
        <Grid item xs/>
        <Grid item xs={10} sm={8} className={classes.projectChunk}>
            <div className={classes.imgCont}>
                <Typography variant="h5">UCLit Website (University College Literary and Athletic Society, UofT)</Typography>
                <img className={classes.img} src={uclit} alt="uclit"/>
            </div>
            <div className={classes.text}>
              <Typography variant="p">During the 2022-2023 school year, I maintained databases and ensure the UCLit’s events and announcements are updated on their website. </Typography>
              <Typography variant="p">As the Web Coordinator, I also explored the possibilities of redesigning the website for the purpose of accessibility and appeal.</Typography>
            </div>
        </Grid>
        <Grid item xs/>
      </Grid>
      {/* UOFTINDER */}
      <Grid container>
        <Grid item xs/>
        <Grid item xs={10} sm={8} className={classes.projectChunk}>
            <div className={classes.imgCont}>
                <Typography variant="h5">UofTinder (CSC207 Project, UofT)</Typography>
                <img className={classes.img} src={uoftinder} alt="uoftinder"/>
            </div>
            <div className={classes.text}>
              <Typography variant="p">During the 2022 fall school semester, I worked with a group of UofT students to build a social networking Android application (UofTinder).</Typography>
              <Typography variant="p">The program offers users the opportunity to either look for their significant other, friends, or academic partners. </Typography>
              <Typography variant="p">Then, a compatibility algorithm analyzes certain profile metrics (e.g., hobbies and interests, sexual orientation, academic focuses) to recommend potential matches to people based on their calculated compatibility. </Typography>
              <Typography variant="p">If two people match with each other through this selection process, they proceed to a chat feature where they have the opportunity to talk and get to know each other more.</Typography>
              <Typography variant="p">Following the SOLID Design Principles and Clean Architecture Model, some of the design patterns that we implemented within our project includes Model View Presenter (MVP), Façade, Observer, and Dependency Injection. To ensure a functional program, we wrote unit tests for the Android User Interface, the Firebase database, and the backend computations.</Typography>
            </div>
        </Grid>
        <Grid item xs/>
      </Grid>

      {/* CODECA */}
      <Grid container>
        <Grid item xs/>
        <Grid item xs={10} sm={8} className={classes.projectChunk}>
            <div className={classes.imgCont}>
                <Typography variant="h5">CodeCa Website </Typography>
                <img className={classes.img} src={codeca} alt="codeca"/>
            </div>
            <div className={classes.text}>
              <Typography variant="p">For four months in Summer 2020, I worked with CodeCa to build new website pages (with ReactJS) and a C3D summer camp webpage (with HTML + CSS)</Typography>
            </div>
        </Grid>
        <Grid item xs/>
      </Grid>
      
      </div>
  )};
  export default AboutRecentProjects;