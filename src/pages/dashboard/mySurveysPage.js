import React, {useState} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {Grid, Menu, MenuItem} from '@material-ui/core';
import DropIcon from '@material-ui/icons/ArrowDropDown';
import {dashboardCategoriesArray} from '../../hardCodeData/dashboardCategories';
import DashboardCategories from '../../components/dashboardCategories';
import {survaysArray} from '../../hardCodeData/products';
import SurveyCard from '../../components/surveyCard';

const teamsData = ['My Teams', 'Team 1', 'Team 2', 'Team 3'];

const useStyles = makeStyles({
  container: {
    padding: '80px 0 144px 0',
  },
  pageTitile: {
    fontFamily: 'Duster Regular',
    fontSize: 72,
    marginBottom: 33,
  },
  purpleText: {
    color: '#3E245C',
  },
  yelloText: {
    color: '#FFDC00',
  },
  blackText: {
    color: '#000000',
  },
  lookLikeText: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'transparent',
  },
  menuItem: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
  },
});

const MySurveysPage = () => {
  const [anchor, setAnchor] = useState(null);
  const [currentTeam, setCurrentTeam] = useState('My Teams');
  const classes = useStyles();

  const menuOpenHandler = ({currentTarget}) => {
    setAnchor(currentTarget);
  };

  const menuCloseHandler = ({currentTarget}) => {
    const value = currentTarget.getAttribute('value');
    setAnchor(null);
    setCurrentTeam((prevState) => (value ? value : prevState));
  };

  return (
    <Grid container className={classes.container} justify="center">
      <Grid item lg={10}>
        <h1 className={classes.pageTitile}>My Surveys​</h1>
      </Grid>
      <Grid item container lg={10} justify="flex-end">
        <Grid item lg={9}>
          <button
            className={clsx(classes.lookLikeText, classes.blackText)}
            onClick={menuOpenHandler}>
            {currentTeam} <DropIcon />
          </button>
          <Menu open={!!anchor} anchorEl={anchor} onClose={menuCloseHandler}>
            {teamsData.map((item) => (
              <MenuItem
                key={item}
                className={clsx(classes.menuItem, classes.blackText)}
                onClick={menuCloseHandler}
                value={item}>
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      </Grid>
      <Grid item lg={12} container justify="flex-end">
        <Grid item container lg={11}>
          <Grid item lg={2}>
            <DashboardCategories categories={dashboardCategoriesArray} />
          </Grid>
          <Grid item lg={10} container>
            {survaysArray.map((survey, index) => (
              <Grid item lg={4} key={index}>
                <SurveyCard {...survey} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MySurveysPage;
