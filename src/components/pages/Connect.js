import { makeStyles } from '@material-ui/core';
import React from 'react';
import ScrollArrow from './parts/scroll';
import HeadingImage from './HeadingImage';

 
const useStyles = makeStyles(theme => ({

}))



const Connect = props =>{
  const classes = useStyles();
  return (
    <div>
      <ScrollArrow/>
      <HeadingImage/>
      this is connect
    </div>
    
  );
}

export default Connect;