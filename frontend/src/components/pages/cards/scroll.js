import React, {useState} from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: 50,
    height: 10,
    borderRadius: "50%",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    animation: "fadeIn 0.3s",
    transition: "opacity 0.4s",
    opacity: 0.5,
    "&:hover": {
      opacity: 1,
    }
  },
}));


const ScrollArrow = () =>{
  const classes = useStyles();
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <ExpandLessIcon className={classes.root} onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default ScrollArrow;