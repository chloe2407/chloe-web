import { makeStyles } from '@material-ui/core';
import {Typography, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';

import srcURLs from '../../../data/srcURLs.js';
import Socials from '../cards/socials.js';



import ReactTypingEffect from 'react-typing-effect';


 
const useStyles = makeStyles(theme => ({
  root: { position: "relative", width: "100%" },
  largeScreenSpace: {
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up('md')]: { margin: 0 },
  },
  typingWrapper: {
    marginTop: theme.spacing(1),
    marginBottom: 0,
    "& .MuiTypography-root": { margin: 0 },
  },
  img: {
    borderRadius: "50%",
    width: "70%",
    maxWidth: 280,
    height: "auto",
    display: "none",
    boxShadow: "0 24px 48px rgba(0,0,0,0.12)",
    border: "4px solid rgba(255,255,255,0.9)",
    [theme.breakpoints.up('md')]: {
      display: "block",
      width: "45%",
      maxWidth: 360,
    },
  },
  layout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up('md')]: { flexDirection: "row-reverse", alignItems: "center" },
  },
  text: {
    position: "relative",
    textAlign: "center",
    color: "#fff",
    margin: 0,
    [theme.breakpoints.up('md')]: { textAlign: "left", marginRight: theme.spacing(6) },
  },
  title: {
    color: "#fff",
    textShadow: "0 2px 20px rgba(0,0,0,0.2)",
  },
  subtitle: {
    color: "rgba(255,255,255,0.9)",
    fontWeight: 500,
  },
  buttonRow: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    marginTop: theme.spacing(3),
    alignItems: "stretch",
    width: 220,
    [theme.breakpoints.up('md')]: { alignItems: "flex-start" },
  },
  button: {
    backgroundColor: "#fff !important",
    color: "#0D9488 !important",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.95) !important",
      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
    },
  },
  buttonOutlined: {
    borderColor: "#fff !important",
    color: "#fff !important",
    fontWeight: 600,
    "&:hover": {
      borderColor: "rgba(255,255,255,0.95) !important",
      backgroundColor: "rgba(255,255,255,0.1) !important",
    },
  },
  socials: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up('md')]: { justifyContent: "flex-start" },
  },
  background: {
    width: "100%",
    minHeight: "100vh",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `linear-gradient(135deg, rgba(13,148,136,0.85) 0%, rgba(30,41,59,0.8) 100%), url(${srcURLs.backgroundimage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  gridWrapper: {
    width: "100%",
    maxWidth: 1200,
    padding: theme.spacing(0, 3),
    [theme.breakpoints.up('md')]: { padding: theme.spacing(0, 6) },
  },
  contentColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up('md')]: { alignItems: "flex-start" },
  },
  imageColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: { marginBottom: 0 },
  },
}))
const HeadingImage = props => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <div className={classes.background}>
        <Grid container className={`${classes.layout} ${classes.gridWrapper}`}>
          <Grid item xs={12} md={6} className={`${classes.largeScreenSpace} ${classes.imageColumn}`}>
            <img src={srcURLs.profilepic} className={classes.img} alt="profilepic"/>
          </Grid>
          <Grid item xs={12} md={6} className={`${classes.largeScreenSpace} ${classes.contentColumn}`}>
            <div className={classes.text}>
              <Typography variant='h2' className={classes.title}>Chloe Lam</Typography>
              <Typography variant="body1" className={classes.subtitle}>Computer Science, Mathematics, Statistics</Typography>
            </div>
            <div className={classes.typingWrapper}>
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
            </div>
            <div className={classes.socials}>
              <Socials light />
            </div>
            <div className={classes.buttonRow}>
              <Button className={classes.buttonOutlined} variant="outlined" size="large" component={Link} to="/portfolio" fullWidth>View Portfolio</Button>
              <Button className={classes.button} variant="contained" size="large" fullWidth><a style={{textDecoration: "none", color: "inherit"}} href={srcURLs.resume} download="Chloe_Lam_Resume">Download Resume</a></Button>
            </div>
        </Grid>
        </Grid>
        {/* <hr className={classes.dashed}></hr> */}
        </div>
      </div>
  )};
  export default HeadingImage;