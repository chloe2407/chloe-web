import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
  const [filter, setFilter] = React.useState('');
  const classes = useStyles();
  const handleChange = (event) => {
    setFilter(event.target.value);
    fil(event.target.value);
  };
  return (
    <div className={classes.dropdown}>
      <FormControl className={classes.formControl}>
        <Select value={filter} onChange={handleChange} displayEmpty className={classes.selectEmpty} inputProps={{ 'aria-label': 'Filter by category' }}>
          <MenuItem value=""><em>Filter By</em></MenuItem>
          {button.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
};

const TechDropdown = ({ label, options, onFilter, categoryType, value = "" }) => {
  const classes = useStyles();
  const handleChange = (event) => {
    const v = event.target.value;
    onFilter(categoryType, v || null);
  };
  if (!options || options.length === 0) return null;
  return (
    <FormControl className={classes.formControl} size="small" style={{ minWidth: 180 }}>
      <Select value={value} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': label }}>
        <MenuItem value=""><em>{label}</em></MenuItem>
        {options.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
      </Select>
    </FormControl>
  );
};

export { TechDropdown };
export default Dropdown;
