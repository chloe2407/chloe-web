import { makeStyles, Typography, Grid, Button} from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import ScrollArrow from './cards/scroll';
import data from "../../data/portfolio.js";
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
const allTechCategories = data2.techCategories

const Portfolio = props => {
  const classes = useStyles();
  const [menuItem, setMenuItem] = useState(data.port);
  const [buttons, setButtons] = useState(allCategories);
  const [techButtons, setTechButtons] = useState(allTechCategories);
  const [showTechButtons, setShowTechButtons] = useState(false);

  
  const filter = (button) =>{
    if(button  === data2.categories[0])
    {
      setMenuItem(data.port);
      if (button !== data2.categories[2])
      {
        // don't show tech buttons
        setShowTechButtons(false);
      }
      return;
    }

    const filteredData = data.port.filter(item =>
      item.category.includes(button)
    );

    setMenuItem(filteredData);
    setShowTechButtons(button === "Technical Projects"); // Show tech buttons only for "Technical Projects"

    
  };

  const techFilter = (techButton) =>{
    if(techButton  === data2.techCategories[0])
    {
      setMenuItem(data.port.filter(item => item.category.includes("Technical Projects")));
      return;
    }

    const filteredTechData = data.port.filter(item =>
      item.category.includes(techButton)
    );

    setMenuItem(filteredTechData);
    
  };
  
  
  return (
    <div className={classes.layout}>


      <Typography variant="h5">Welcome to my portfolio! Below you can view projects based on their category.</Typography>

      <Dropdown button={buttons} filter={filter} className={classes.dropdown}/>
      <But button={buttons} filter={filter} className={classes.buttons}/>
      

      {/* Conditional rendering for tech buttons */}
      {showTechButtons ? (
        <div>
          <But button={techButtons} filter={techFilter} className={classes.buttons} buttonColor="secondary"/>
        </div>
      ): <div></div>}

      <Menu menuItem={menuItem}/>
      
      <ScrollArrow/>
      
      


    </div>
    
  );
}

export default Portfolio;