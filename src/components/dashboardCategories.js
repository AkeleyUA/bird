import React, {useState} from 'react';
import {makeStyles, Grid, Button} from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    listStyleType: 'none',
  },
  listItem: {
    minHeight: 36,
    borderRadius: 50,
    justifyContent: 'flex-start',
    padding: '6px 50px 6px 20px',
    marginBottom: 18,
    textTransform: 'none',
    transition: 'none',
  },
  listItemActive: {
    minHeight: 36,
    borderRadius: 50,
    border: '2px solid #222222',
    justifyContent: 'flex-start',
    padding: '4px 48px 4px 18px',
    marginBottom: 18,
    textTransform: 'none',
    transition: 'none',
  },
});

const DashboardCategories = ({categories}) => {
  const [currentCategory, setCurrentCategory] = useState(1);
  const classes = useStyles();

  const changeCategoryHandler = ({currentTarget: {id}}) => {
    setCurrentCategory(+id + 1);
  };
  return (
    <Grid container component="ul" className={classes.list}>
      {categories.map(({name, Icon}, index) => (
        <Grid
          item
          key={name}
          xs={12}
          component="li"
          container
          alignItems="center">
          <Button
            id={`${index}`}
            onClick={changeCategoryHandler}
            className={
              currentCategory === index + 1
                ? classes.listItemActive
                : classes.listItem
            }
            startIcon={Icon ? <Icon /> : <div style={{width: 30}}></div>}>
            {name}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardCategories;
