import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import Hamburger from "../../pages/cards/hamburger.js";

import { Link, withRouter } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  link: {
    textDecoration: "none", 
    color: "black",
  },
  
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Nav = props => {
  const classes = useStyles();
  // const { history } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
    </Menu>
  );


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    </Menu>
  );

  const MouseOver = (event) => {
    event.target.style.color = 'cyan';

  }
  const MouseOut = (event) => {
    event.target.style.color = '';

  }

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="white">
        <Toolbar id="back-to-top-anchor">
      
          <Box display='flex' flexGrow={1}>
            <Link to="/chloe-web/" onMouseOver={MouseOver} onMouseOut={MouseOut} className={classes.link}><Typography variant="h6" noWrap>
              Chloe
            </Typography></Link>
          </Box>
          <Link to="/chloe-web/portfolio" onMouseOver={MouseOver} onMouseOut={MouseOut} className={classes.link}><Typography className={classes.title} variant="h6" noWrap style={{padding: "0 1vw"}}>
            Portfolio
          </Typography></Link>
          <Link to="/chloe-web/connect" onMouseOver={MouseOver} onMouseOut={MouseOut} className={classes.link}><Typography className={classes.title} variant="h6" noWrap style={{padding: "0 1vw"}}>
            Connect
          </Typography></Link>
          <Hamburger/>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
export default withRouter(Nav);