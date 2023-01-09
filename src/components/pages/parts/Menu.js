import { makeStyles, } from '@material-ui/core';
import React from 'react';
import CoolCard from '../cards/coolcard';
import { Link } from 'react-router-dom';

 
const useStyles = makeStyles(theme => ({
  layout: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    flexWrap: "wrap",


  }
}))



function Menu({menuItem}) {
  const classes = useStyles();

  function shuffle(menu) {
    var ctr = menu.length, temp, index;

  // While there are elements in the array
      while (ctr > 0) {
  // Pick a random index
          index = Math.floor(Math.random() * ctr);
  // Decrease ctr by 1
          ctr--;
  // And swap the last element with it
          temp = menu[ctr];
          menu[ctr] = menu[index];
          menu[index] = temp;
      }
      return menu;
  }

  const shuffled = shuffle(menuItem);
  return (
    <div className={classes.layout}>
        {
            shuffled.map((item) => {
                return (
                    <div className="item-con" key={item.id} style={{flex:1}}>
                        <CoolCard {...item} />
                    </div>
                )

            })
        }


    </div>
    
  );
}

export default Menu;