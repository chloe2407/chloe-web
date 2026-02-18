import { makeStyles } from '@material-ui/core';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CarouselDeck from '../cards/carousel.js';
import React from 'react';

const useStyles = makeStyles(theme => ({
  layout: {
    padding: theme.spacing(8, 2),
    backgroundColor: "#FAFBFC",
    [theme.breakpoints.up('md')]: { padding: theme.spacing(12, 4) },
  },
  title: {
    marginBottom: theme.spacing(6),
    color: "#1E293B",
  },
  viewAllBtn: {
    marginTop: theme.spacing(4),
    textTransform: "none",
    fontWeight: 600,
  },
}))


const FeaturedWorks = props => {
    const classes = useStyles();
  return (
      <div className={classes.layout}>
        <Typography variant="h3" className={classes.title}>Featured Works</Typography>
        <CarouselDeck props="Featured"/>
        <div style={{ textAlign: "center" }}>
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
  )};
  export default FeaturedWorks;