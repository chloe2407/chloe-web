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
    const index = 0
    data2.categories.filter(item => {
        for (var i = 0; i < data2.categories.length; i++) 
        {
          if (item.name === "Newspaper")
          {
            index = i
          }
        }
      })
    
  return (
      <div className={classes.layout}>
        <Typography variant="h3">Get to know me better through my Monthly Newsletters!</Typography>
        <CarouselDeck {...index}/>
        
      </div>
  )};
  export default Newsletters;