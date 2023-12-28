import { makeStyles, } from '@material-ui/core';
import React, {useState} from 'react';
import { Button } from '@material-ui/core';

 
const useStyles = makeStyles(theme => ({
  layout: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "80%",

  },
  dropdown: {
    display: "visible",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "80%",
    [theme.breakpoints.down('md')]: {
      display: "none",
      
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: "60%",
      
    },
  },
  button: {
    margin: "0.3vw",
  }
}))



const But = ({button, filter, buttonColor}) => {
  const classes = useStyles();
  const [selected, setSelected] = useState('');
  const selection = (c) => {
    if (selected === c)
    {
      return "contained"
    } 
    else
    {
      return "outlined"
    }
  }
  const handle = (c) => {
    setSelected(c)
    filter(c)
  }
  
  return (
    <div className={classes.dropdown}>
      
      {
        button.map((cat => {
          return (
            <Button className={classes.button} color={buttonColor || 'primary'} variant={selection(cat)} onClick={() => handle(cat)}>{cat}</Button>
          )
          
        }))
        
      }




    </div>
    
  );
}

export default But;