import { makeStyles, Typography} from '@material-ui/core';
import React from 'react';
import { Button} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    textAlign: "center",
  },
  image: {
    width: "100vw",
    height: "30vh",
    opacity: "50%",
     backgroundRepeat:"no-repeat",
      backgroundSize:"contain"
  },
  button: {
    margin: "0.3vw",
  }
  


}))


const PortfolioProject = props => {
  const classes = useStyles();
  const project = props.location.prop

  return (
      <div className={classes.root}>
 
        <img src={project.img} className={classes.image} alt="projectpic"/>
        <Typography variant='h3'>{project.title}</Typography>
        {
        project.category.map((cat => {
          return (
            <Button className={classes.button} color="secondary">{cat}</Button>
          )  
        }))
      }
      <Typography variant='h5' style={{width: "80vw", display: "flex", justifyContent: "center"}}>About the project: {project.description}</Typography>
      <Typography variant='h6'>Learn more about the project</Typography>
      
      {
        project.links.map((link => {
          return (
            <Button className={classes.button} color="secondary" href={link[1]} target="_blank">{link[0]}</Button>
          )  
        }))
      }
    </div>
    
  );
}

export default PortfolioProject;