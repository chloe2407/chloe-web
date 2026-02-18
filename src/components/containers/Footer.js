import React from "react";
import { makeStyles, Typography } from '@material-ui/core';
import Socials from "../pages/cards/socials";
const useStyles = makeStyles(theme => ({
  everything: {
    backgroundColor: "#1E293B",
    color: "#fff",
    padding: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 700,
  },
  socialsHidden: {
    display: "none",
    [theme.breakpoints.up('md')]: { display: "flex", justifyContent: "center" },
  },
  socialsShow: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: { display: "none" },
  },
  copyright: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 14,
    marginTop: theme.spacing(4),
  },
}))

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.everything}>
      <Typography variant="h5" className={classes.title}>Get in touch</Typography>
      <div className={classes.socialsHidden}><Socials light /></div>
      <div className={classes.socialsShow}><Socials light /></div>
      <Typography className={classes.copyright}>©{new Date().getFullYear()} Chloe Lam. All Rights Reserved.</Typography>
    </div>
  );
};

export default Footer;
