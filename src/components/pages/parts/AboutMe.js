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
              <Typography variant="body1" paragraph>Hi! I'm Chloe — a <strong>Computer Science</strong> specialist at the University of Toronto with a <strong>Mathematics</strong> and <strong>Statistics</strong> minor, based in <strong>Toronto</strong>, ON.</Typography>
              <Typography variant="body1" paragraph>I specialize in <strong>Artificial Intelligence</strong>, <strong>Web & Internet Technologies</strong>, and <strong>Computer Vision</strong>, and I love turning ideas into real projects. Whether it's building full-stack applications or training models that see the world differently, I'm always excited to dive into new challenges.</Typography>
              <Typography variant="body1" paragraph>I collaborate with peers on projects that push the boundaries of what we can build — from apps like <Link to={`/portfolio/${encodeURIComponent("UofTinder (CSC207 Final Project)")}`}>UofTinder</Link> to research in <Link to={`/portfolio/${encodeURIComponent("Volcano Risk Reduction in Canada (VRRC)")}`}>volcanic monitoring and machine learning</Link>. Always curious, always learning. Let's chat!</Typography>
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