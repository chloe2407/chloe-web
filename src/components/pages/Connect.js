import { makeStyles } from '@material-ui/core';
import React from 'react';
import ScrollArrow from './cards/scroll';
import ContactForm from './parts/ContactForm';
 
const useStyles = makeStyles(theme => ({

}))



const Connect = props =>{
  const classes = useStyles();
  return (
    <div>
      <ScrollArrow/>
      <ContactForm/>
    </div>
    
  );
}

export default Connect;