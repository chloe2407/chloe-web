import { makeStyles, Typography, Grid} from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import ScrollArrow from './cards/scroll';
import TimelineTeaser from './parts/TimelineTeaser';
import data from "../../data/portfolio.js";
import Chip from '@material-ui/core/Chip';
import CoolCard from '../../components/pages/cards/coolcard.js';
import Menu from './parts/Menu';
import But from './parts/Button';
import Dropdown from './cards/dropdown';
 
const useStyles = makeStyles(theme => ({
  layout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",

  },

}))

const allCategories = ['All', 'Newsletter','Artificial Intelligence','Entrepreneurship', 'Prototype', 'Video', 'Article','Deck/One-Pager', 'Longevity', 'Quantum Computing', 'Recommendation','Hackathon', 'Haptics', 'Social Media', 'Nanotechnology', 'Website'];


const Portfolio = props => {
  const classes = useStyles();
  const [menuItem, setMenuItem] = useState(data.port);
  const [buttons, setButtons] = useState(allCategories);
  
  const filter = (button) =>{
    if(button  === 'All')
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


        <Typography variant="h1">Chloe's Portfolio</Typography>

      <Dropdown button={buttons} fil={filter} className={classes.dropdown}/>
      <But button={buttons} filter={filter} className={classes.buttons}/>
      <Menu menuItem={menuItem}/>
      <ScrollArrow/>
      
      


    </div>
    
  );
}

export default Portfolio;