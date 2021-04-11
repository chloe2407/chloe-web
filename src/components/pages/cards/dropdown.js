import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { filterStateSelector } from '@material-ui/data-grid';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    // width: "90%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  dropdown: {
    display: "visible",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up('lg')]: {
      display: "none",
      
    },
  },
}));

 const Dropdown = ({button, fil}) => {
  const classes = useStyles();
//   const allCategories = ['All', 'Newsletter','Artificial Intelligence','Entrepreneurship', 'Prototype', 'Video', 'Article','Deck/One-Pager', 'Longevity', 'Quantum Computing', 'Recommendation','Hackathon', 'Haptics', 'Social Media', 'Nanotechnology', 'Website'];

  const [filter, setFilter] = React.useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
    fil(event.target.value)
  };

  return (
    <div className={classes.dropdown}>
 
      
 <FormControl className={classes.formControl}>
        <Select
          value={filter}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
            <MenuItem value=""><em>Filter By</em></MenuItem>
          {button.map(item => (
              <MenuItem value={item}>{item}</MenuItem>
          ))}

        </Select>

      </FormControl>
    </div>
  );
}

export default Dropdown;
