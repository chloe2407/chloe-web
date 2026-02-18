import { makeStyles, } from '@material-ui/core';
import React from 'react';
import CoolCard from '../cards/coolcard';

 
const useStyles = makeStyles(theme => ({
  layout: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 320px))",
    rowGap: theme.spacing(8),
    columnGap: theme.spacing(5),
    padding: theme.spacing(2, 0),
    maxWidth: 1200,
    margin: "0 auto",
    justifyContent: "center",
    overflow: "visible",
  },
  cardWrapper: {
    display: "flex",
    justifyContent: "center",
    overflow: "visible",
  },
}))



function isArchivedOrMisc(item) {
  if (!item.category || !Array.isArray(item.category)) return false;
  return item.category.some(c => 
    typeof c === "string" && (c === "Archived" || c === "Miscellaneous")
  );
}

function sortByRecent(menu) {
  return [...menu].sort((a, b) => (b.id || 0) - (a.id || 0));
}

function Menu({menuItem, searchActive}) {
  const classes = useStyles();

  const priority = menuItem.filter(item => !isArchivedOrMisc(item));
  const archived = menuItem.filter(item => isArchivedOrMisc(item));
  const ordered = [...sortByRecent(priority), ...sortByRecent(archived)];
  return (
    <div className={classes.layout}>
        {
            ordered.map((item) => {
                return (
                    <div className={classes.cardWrapper} key={item.id}>
                        <CoolCard {...item} searchActive={searchActive} />
                    </div>
                )

            })
        }


    </div>
    
  );
}

export default Menu;