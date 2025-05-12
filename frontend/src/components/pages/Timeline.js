import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import ScrollArrow from './cards/scroll';


 
const useStyles = makeStyles(theme => ({

}))



const Timeline = props =>{
  const classes = useStyles();
  return (
    <div>
      <ScrollArrow/>
      <Typography variant="h3" style={{textAlign: "center", padding: "5vh 0"}}>Coming Soon!</Typography>
      




    </div>
    
  );
}

export default Timeline;