import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import ScrollArrow from './cards/scroll';
import TimelineTeaser from './parts/TimelineTeaser';
import { Link } from 'react-router-dom';

 
const useStyles = makeStyles(theme => ({

}))



const Portfolio = props =>{
  const classes = useStyles();
  return (
    <div>
      <ScrollArrow/>
      <TimelineTeaser/>
      <Typography variant="h3" style={{textAlign: "center", padding: "5vh 0"}}>Coming Soon!</Typography>
      {/* past and current projects */}
    </div>
    
  );
}

export default Portfolio;