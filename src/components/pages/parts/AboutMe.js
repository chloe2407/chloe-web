import { makeStyles } from '@material-ui/core';
import { Typography, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import Socials from "../cards/socials.js";
import srcURLs from '../../../data/srcURLs.js';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(8, 2),
    backgroundColor: "#fff",
    [theme.breakpoints.up('md')]: { padding: theme.spacing(12, 4) },
  },
  text: {
    lineHeight: 1.8,
    "& a": {
      color: theme.palette.primary.main,
      textDecoration: "none",
      fontWeight: 600,
      "&:hover": { textDecoration: "underline" },
    },
  },
  title: {
    marginBottom: theme.spacing(4),
    color: "#1E293B",
  },
  buttonRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
  button: {
    fontWeight: 600,
  },
}))


const AboutMe = props => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10} lg={8}>
            <Typography variant="h3" className={classes.title}>About Me</Typography>
            <div className={classes.text}>
              <Typography variant="body1" paragraph>Hi! I'm Chloe — a <strong>Computer Science</strong> student at the University of Toronto, specializing in <strong>AI</strong>, <strong>Web Technologies</strong>, and <strong>Computer Vision</strong>, with minors in <strong>Math</strong> and <strong>Statistics</strong>. Based between Vancouver and Toronto, I'm drawn to where technology meets creativity. <strong>Frontend</strong> and <strong>UI/UX</strong> excite me most — turning complex ideas into meaningful, accessible experiences.</Typography>
              <Typography variant="body1" paragraph>That curiosity goes beyond coding. I've explored directing short promotional videos, creating content for international programs, and representing organizations as a campus ambassador. These experiences have taught me that good design — in any medium — starts with empathy for the user.</Typography>
              <Typography variant="body1" paragraph>I love turning ideas into reality. From <Link to={`/portfolio/${encodeURIComponent("Sentinel — Clinical Symptom Summary")}`}>Sentinel</Link> and <Link to={`/portfolio/${encodeURIComponent("UofTinder (CSC207 Final Project)")}`}>UofTinder</Link> to <Link to={`/portfolio/${encodeURIComponent("Volcano Risk Reduction in Canada (VRRC)")}`}>volcanic monitoring research</Link>, I'm always building alongside peers who push me to think bigger. Always curious, always learning — let's chat!</Typography>
              <div className={classes.buttonRow}>
                <Button className={classes.button} variant="outlined" color="primary" size="large" component={Link} to="/portfolio">View Portfolio</Button>
                <Button className={classes.button} variant="contained" color="primary" size="large"><a style={{ textDecoration: "none", color: "inherit" }} href={srcURLs.resume} download="Chloe_Lam_Resume">Download Resume</a></Button>
              </div>
              <Socials/>
            </div>
        </Grid>
      </Grid>
      </div>
  )};
  export default AboutMe;