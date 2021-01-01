import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Close from '@material-ui/icons/Close';

import { withRouter } from 'react-router-dom';


import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
  list: {
    width: "100vw",
  },
  fullList: {
    width: 'auto',
  },
  ham: {

    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  content: {
    alignItems: "center", 
    justifyContent: "center",
    padding: "1vh 0",
  }
}));

 const Hamburger = props => {
  const classes = useStyles();
  const { history } = props;


  const itemsList = [
    {
      text: "Home",
      onClick: () => history.push("/chloe-web/")
    },
    {
      text: "Connect",
      onClick: () => history.push("/chloe-web/connect")
    },
    {
      text: "Portfolio",
      onClick: () => history.push("/chloe-web/portfolio")
    },
  ]

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{padding: "2vw"}}/>
      <Divider />
      <List>
        {itemsList.map((item, index) => {
          const {text, onClick} = item;
          return(
            <ListItem button key={text} onClick={onClick}>
              <ListItemText primary={text}/>
            </ListItem>
          )
        })}

    
      </List>
      
    </div>
  );

  return (
    <React.Fragment key={'right'} >
      <Button className={classes.ham} onClick={toggleDrawer('right', true)}><MenuIcon/></Button>
      <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
      <Button onClick={toggleDrawer('right', false)} className={classes.content}><Close/></Button>
          {list('right')}
        </Drawer>
      </React.Fragment>
    
  );
}

export default withRouter(Hamburger);
