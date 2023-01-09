import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: "80vw",
    maxWidth: 345,
    margin: "2vw",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    [theme.breakpoints.up('xs')]: {
      width: "60vw",
    },
    [theme.breakpoints.up('md')]: {
      width: "25vw",
      margin: "2vw",
    },
    [theme.breakpoints.up('lg')]: {
      width: "20vw",
    },
    [theme.breakpoints.up('xl')]: {
      width: "15vw",
    },
    
  },
  container: {
    position: "relative",
  },
  overlay: {
    position: "absolute",
    flexDirection: "column",
    alignItems: "center",
    top: 0,
    transition: ".5s ease",
    textAlign: "center",
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    // filter: "brightness(80%)",
  },
  link: {
      textDecoration: "none",
      color: "inherit",
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function CoolCardClick(props) {
  const classes = useStyles();
  const [isShown, setIsShown] = React.useState(false);
  return (
    <Card className={classes.root}>
      {/* <a className={classes.link} href={props.link} target="_blank" rel="noopener noreferrer"> */}
      {/* <Link to={"/portfolio/project"} className={classes.link}> */}
      <Link to={{ pathname: '/portfolio/' + props.title, prop: {...props}}} className={classes.link}>
      <CardActionArea className={classes.container}>
        <CardMedia
          className={classes.media}
          image={props.img}
          title={props.title}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        />
        {isShown && (
        <div className={classes.overlay}>
        {props.category.map(item => (
          <Button variant="contained" size="medium" color="secondary" style={{margin: "0.2vw"}}>{item}</Button>
        ))
        }
        </div>
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>

        </CardContent>
      </CardActionArea>
      </Link>
      {/* </a> */}
      <CardActions>
      {/* <ClickAwayListener onClickAway={handleClickAwayEvent}>
		<div
		style={{
			position: "relative",
		}}
		>
		<IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
		{open ? (<div></div>) : null}
		</div>
	</ClickAwayListener> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.description}
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}
