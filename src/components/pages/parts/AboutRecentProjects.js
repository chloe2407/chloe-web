import { makeStyles } from '@material-ui/core';
import { Typography, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import srcURLs from '../../../data/srcURLs.js';
import React, { useState } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(10, 2),
    backgroundColor: "#F8FAFC",
    [theme.breakpoints.up('md')]: { padding: theme.spacing(14, 4) },
  },
  sectionContent: {
    width: "100%",
    maxWidth: 1000,
    margin: "0 auto",
  },
  sectionTitle: {
    marginBottom: theme.spacing(8),
    textAlign: "center",
    color: "#1E293B",
    fontWeight: 700,
    position: "relative",
    "&::after": {
      content: '""',
      display: "block",
      width: 48,
      height: 4,
      backgroundColor: theme.palette.primary.main,
      margin: "16px auto 0",
      borderRadius: 2,
    },
  },
  cardWrapper: {
    position: "relative",
    marginBottom: theme.spacing(6),
  },
  projectCard: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
    transition: "box-shadow 0.3s ease",
    border: "1px solid rgba(0,0,0,0.06)",
    [theme.breakpoints.up('md')]: {
      flexDirection: "row",
      alignItems: "stretch",
      minHeight: 240,
      "&:hover": {
        boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
      },
      "&:hover img": { transform: "scale(1.03)" },
    },
  },
  projectCardAlt: {
    [theme.breakpoints.up('md')]: { flexDirection: "row-reverse" },
  },
  imgWrapper: {
    position: "relative",
    height: 240,
    overflow: "hidden",
    [theme.breakpoints.down('sm')]: { height: 200 },
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  },
  cardContent: {
    flex: 1,
    padding: theme.spacing(4),
    paddingBottom: 56,
    paddingRight: 130,
    display: "flex",
    flexDirection: "column",
    minHeight: 0,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3, 4),
    },
  },
  cardContentTextRight: {
    [theme.breakpoints.up('md')]: {
      paddingBottom: 56,
      paddingRight: 130,
    },
  },
  projectTitle: {
    marginBottom: theme.spacing(1.5),
    color: "#1E293B",
    fontWeight: 600,
    fontSize: "1.35rem",
    flexShrink: 0,
  },
  text: {
    flex: 1,
    lineHeight: 1.6,
    color: "#475569",
    marginBottom: theme.spacing(1.5),
    "& p": { marginBottom: "0.5em !important" },
    "& p:last-child": { marginBottom: "0 !important" },
  },
  textCollapsed: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",
    [theme.breakpoints.down('sm')]: {
      WebkitLineClamp: 4,
    },
  },
  expandWrap: {
    flexShrink: 0,
    marginTop: theme.spacing(0.5),
  },
  expandBtn: {
    flexShrink: 0,
    textTransform: "none",
    fontWeight: 600,
    padding: 0,
    minWidth: "auto",
  },
  viewProjectWrap: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  viewProjectBtn: {
    textTransform: "none",
    fontWeight: 600,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  viewAllWrap: {
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
  viewAllBtn: {
    textTransform: "none",
    fontWeight: 600,
  },
}))

const projects = [
  { title: "Sentinel — Clinical Symptom Summary", portfolioTitle: "Sentinel — Clinical Symptom Summary", image: srcURLs.csc491.sentinel, paragraphs: ["Sentinel is a clinical symptom summary web app that helps healthcare providers and patients track and summarize symptom information.", "It integrates LLM API calls to Gemini and Meta Llama for intelligent summarization. Built with Next.js, FastAPI, MongoDB, and deployed on Vercel and Google Cloud Run."] },
  { title: "VRRC (Natural Resources Canada (NRCan))", portfolioTitle: "Volcano Risk Reduction in Canada (VRRC)", image: srcURLs.vrrc.vrrc, paragraphs: ["At Natural Resources Canada (NRCan), I spent eight months building tools for satellite-based volcanic monitoring across Canada—helping scientists track and respond to volcanic unrest in near real time.", "I led a UI design session with eight+ scientists to create a user-centered observation log tab in Figma and Dash/Python, improving dashboard usability by 25%. I also integrated Government of Canada branding, streamlined legends, glacier footprint data, and more accurate summary tables.", "I built a scalable real-time inference pipeline for RCM InSAR data using Docker and AWS—optimizing image resolution, coordinate systems, and ML models to refine displacement analysis and support automated volcanic unrest detection.", "In the winter semester of 2025, I continued this work through CSC495 at U of T, improving model performance and deploying an end-to-end automated detection system."] },
  { title: "Patient App (BC Renal, Provincial Health Services Authority)", portfolioTitle: "Patient App", image: srcURLs.bcrenal.patientapp, paragraphs: ["For four months in Summer 2023 (May to August), I worked with BC Renal to develop a new Flutter Application to enhance patient treatment, collaborating closely with a UX designer to implement user-friendly designs.", "During my time there, I implemented Project Structure based on SOLID Design Principles and Clean Architecture, resulting in efficient code organization and future scalability.", "I also created comprehensive Documentation for the application, ensuring clear communication of app functionality and progress to future developers.", "Every month, I presented the application progress to a large development team, showcasing effective communication skills and the ability to explain complex technical concepts clearly.", "By the end of the project, I demonstrated strong Technical Aptitude with Flutter and Dart for app development and implementing Firebase for efficient data storage and retrieval."] },
  { title: "UCLit Website (University College Literary and Athletic Society, UofT)", portfolioTitle: "UCLit Website (University College Literary and Athletic Society, UofT)", image: srcURLs.uclit, paragraphs: ["During the 2022-2023 school year, I maintained databases and ensured the UCLit's events and announcements are updated on their website.", "As the Web Coordinator, I also explored the possibilities of redesigning the website for the purpose of accessibility and appeal."] },
  { title: "UofTinder (CSC207 Project, UofT)", portfolioTitle: "UofTinder (CSC207 Final Project)", image: srcURLs.uoftinder, paragraphs: ["During the 2022 fall school semester, I worked with a group of UofT students to build a social networking Android application (UofTinder).", "The program offers users the opportunity to either look for their significant other, friends, or academic partners. A compatibility algorithm analyzes profile metrics to recommend potential matches.", "Following the SOLID Design Principles and Clean Architecture Model, we implemented Model View Presenter (MVP), Façade, Observer, and Dependency Injection. We wrote unit tests for the Android UI, Firebase database, and backend computations."] },
  { title: "CodeCa Website", portfolioTitle: "CodeCa: C3D Summer Camp Webpage", image: srcURLs.codeca, paragraphs: ["For four months in Summer 2020, I worked with CodeCa to build new website pages (with ReactJS) and a C3D summer camp webpage (with HTML + CSS)."] },
];

const CHAR_LIMIT = 380; // ~5 lines at typical width
const hasExtraText = (paragraphs) => paragraphs.join(" ").length > CHAR_LIMIT;

const AboutRecentProjects = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState({});
  const toggleExpanded = (i) => setExpanded(prev => ({ ...prev, [i]: !prev[i] }));
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.sectionTitle}>Recent Projects</Typography>
      <div className={classes.sectionContent}>
        {projects.map((project, i) => {
          const isExpanded = expanded[i];
          const showExpand = hasExtraText(project.paragraphs);
          const isCollapsed = showExpand && !isExpanded;
          return (
            <div key={i} className={classes.cardWrapper}>
              <Grid
                container
                className={`${classes.projectCard} ${i % 2 === 1 ? classes.projectCardAlt : ""}`}
              >
                <Grid item xs={12} md={5} className={classes.imgWrapper}>
                  <img className={classes.img} src={project.image} alt={project.title} />
                </Grid>
                <Grid item xs={12} md={7} className={`${classes.cardContent} ${i % 2 === 0 ? classes.cardContentTextRight : ""}`}>
                  <Typography variant="h5" className={classes.projectTitle}>{project.title}</Typography>
                  <div className={`${classes.text} ${isCollapsed ? classes.textCollapsed : ""}`}>
                    {project.paragraphs.map((p, j) => (
                      <Typography key={j} variant="body1" paragraph>{p}</Typography>
                    ))}
                  </div>
                  {showExpand && (
                    <div className={classes.expandWrap}>
                      <Button
                        color="primary"
                        className={classes.expandBtn}
                        onClick={() => toggleExpanded(i)}
                        endIcon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      >
                        {isExpanded ? "Show less" : "Read more"}
                      </Button>
                    </div>
                  )}
                </Grid>
              </Grid>
              <div className={classes.viewProjectWrap}>
                <Button
                  component={Link}
                  to={`/portfolio/${encodeURIComponent(project.portfolioTitle)}`}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  className={classes.viewProjectBtn}
                  endIcon={<ArrowForwardIcon />}
                >
                  View project
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.viewAllWrap}>
        <Button
          component={Link}
          to="/portfolio"
          variant="contained"
          color="primary"
          size="large"
          className={classes.viewAllBtn}
          endIcon={<ArrowForwardIcon />}
        >
          View all projects
        </Button>
      </div>
    </div>
  );
};
export default AboutRecentProjects;
