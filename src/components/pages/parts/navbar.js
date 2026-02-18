import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import Hamburger from "../cards/hamburger.js";

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
    color: "#1E293B",
    fontWeight: 500,
    transition: "color 0.2s ease",
    padding: theme.spacing(1, 2),
    borderRadius: 8,
    "&:hover": { color: "#0D9488" },
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

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" elevation={0} style={{ backgroundColor: '#fff', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <Toolbar id="back-to-top-anchor" style={{ minHeight: 64 }}>
          <Box display='flex' flexGrow={1}>
            <Link to="/" className={classes.link}><Typography variant="h6" noWrap style={{ fontWeight: 700, color: '#0D9488' }}>
              Chloe Lam
            </Typography></Link>
          </Box>
          <Link to="/portfolio" className={classes.link}><Typography className={classes.title} variant="h6" noWrap style={{ color: 'inherit' }}>
            Portfolio
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