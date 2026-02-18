import { makeStyles } from '@material-ui/core';
import {Button } from '@material-ui/core';

import React from 'react';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Email from '@material-ui/icons/Email';
import GitHub from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    alignItems: "center",
  },
  iconBtn: {
    minWidth: 48,
    minHeight: 48,
    padding: theme.spacing(1.5),
    color: "inherit",
    "& .MuiSvgIcon-root": {
      fontSize: 32,
      color: "inherit",
    },
    "&:hover .MuiSvgIcon-root": {
      color: "#0D9488",
    },
  },
  iconBtnLight: {
    "& .MuiSvgIcon-root": {
      color: "#fff !important",
    },
    "&:hover .MuiSvgIcon-root": {
      color: "#5EEAD4 !important",
    },
  },
}))



const Socials = ({ light = false }) => {
  const classes = useStyles();
  const btnClass = light ? `${classes.iconBtn} ${classes.iconBtnLight}` : classes.iconBtn;
  return (
    <div className={classes.root}>
      <Button className={btnClass}><a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chloe-lam-2407/"><LinkedIn/></a></Button>
      <Button className={btnClass}><a className={classes.link} target="_blank" rel="noopener noreferrer" href="mailto:chloelam2407@gmail.com"><Email/></a></Button>
      <Button className={btnClass}><a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://github.com/chloe2407"><GitHub/></a></Button>
    </div>
  );
};
  export default Socials;