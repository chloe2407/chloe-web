import React, {useState} from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: 44,
    height: 44,
    borderRadius: "50%",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    backgroundColor: "#0D9488",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 12px rgba(13,148,136,0.4)",
    cursor: "pointer",
    transition: "all 0.2s ease",
    zIndex: 1000,
    "&:hover": {
      backgroundColor: "#0B7A6F",
      transform: "scale(1.05)",
      boxShadow: "0 6px 20px rgba(13,148,136,0.5)",
    },
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

  return showScroll ? (
    <ExpandLessIcon className={classes.root} onClick={scrollTop} style={{ fontSize: 28 }} />
  ) : null;
}

export default ScrollArrow;