import { makeStyles } from '@material-ui/core';
import {Typography } from '@material-ui/core';
import CarouselDeck from '../../pages/cards/carousel.js'
import data2 from '../../../data/categories.js';

import React from 'react';

const useStyles = makeStyles(theme => ({
    layout: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      },
  
}))


const Newsletters = props => {
    const classes = useStyles();
    
  return (
      <div className={classes.layout}>
        <Typography variant="h3">Get to know me better through my Monthly Newsletters!</Typography>
        <CarouselDeck props="Newsletter"/>
        
      </div>
  )};
  export default Newsletters;