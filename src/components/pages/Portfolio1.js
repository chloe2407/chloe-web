import { makeStyles, Typography, Grid} from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import ScrollArrow from './cards/scroll';
import TimelineTeaser from './parts/TimelineTeaser';
import data from "../../data/portfolio.js";
import Chip from '@material-ui/core/Chip';
import CoolCard from './cards/coolcard.js';
import Menu from './parts/Menu';
import But from './parts/Button';
import Dropdown from './cards/dropdown';
import data2 from "../../data/categories.js";
 
const useStyles = makeStyles(theme => ({
  layout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",

  },

}))

const allCategories = data2.categories



const Portfolio1 = props => {
  const classes = useStyles();
  const [menuItem, setMenuItem] = useState(data.port);
  const [buttons, setButtons] = useState(allCategories);
  
  const filter = (button) =>{
    if(button  === data2.categories[0])
    {
      setMenuItem(data.port);
      return;
    }

      
    const filteredData = []
    data.port.filter(item => {
      for (var i = 0; i < item.category.length; i++) 
      {
        if (item.category[i] === button)
        {
          // add to filtered data
          filteredData.push(item)
        }
      }
    })

    setMenuItem(filteredData);
  }
  
  return (
    <div className={classes.layout}>
      Welcome to my portfolio! Below you can view projects based on their category.

      Featured

      Technical Projects
      - Design
      - Mobile
      - Web stuff
      - Java
      - Python
      - Assembly

      Entrepreneurship/Hackathon
      Newsletter

      


        
      
      hi

    </div>
    
  );
}

export default Portfolio1;