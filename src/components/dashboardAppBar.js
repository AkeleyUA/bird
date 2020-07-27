import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {Grid, Button, IconButton} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import PlusIcon from '@material-ui/icons/Add';

const links = [
  {
    name: 'My Surveys',
    path: '/my-office/dashboard',
  },
  {
    name: 'My Settings',
    path: '/my-office/settings',
  },
];

const useStyles = makeStyles({
  container: {
    height: 67,
    background: '#3E245C',
  },
  yelloWText: {
    color: '#FFDC00',
  },
  purpleText: {
    color: '#3E245C',
  },
  link: {
    padding: '0 12px',
    boxSizing: 'border-box',
    fontSize: 16,
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    letterSpacing: '0.02em',
    borderRadius: 50,
    textDecorationLine: 'none',
    textTransform: 'none',
    marginLeft: 10,
    color: '#FFDC00',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: '#29183d',
    },
  },
  activeLink: {
    background: '#FFDC00',
    color: '#3E245C',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: '#FFDC00',
    },
  },
  yellowDivider: {
    width: 1,
    background: '#FFDC00',
    height: 25,
    margin: '0 25px',
  },
  smallText: {
    fontFamily: 'PT Sans',
    fontSize: 16,
    letterSpacing: '0.02em',
  },
  buttonText: {
    fontFamily: 'PT Sans',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: '0.02em',
  },
  button: {
    padding: '3px 14px',
    background: '#FFDC00',
    borderRadius: 4,
    marginLeft: 10,
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: '#ad9600',
    },
  },
  blockWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 30,
  },
  round: {
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#FFDC00',
    marginLeft: 15,
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: '#ad9600',
    },
  },
});

const AppBar = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.container}
      justify="flex-end"
      alignItems="center">
      {links.map(({name, path}, index) => (
        <Grid item key={index}>
          <Button
            component={NavLink}
            activeClassName={clsx(classes.activeLink)}
            classes={{root: classes.link}}
            to={path}>
            {name}
          </Button>
        </Grid>
      ))}
      <div className={classes.yellowDivider} />
      <Grid item className={classes.blockWrapper}>
        <p className={clsx(classes.smallText, classes.yelloWText)}>
          Basic plan
        </p>
        <Button
          className={clsx(
            classes.button,
            classes.buttonText,
            classes.purpleText,
          )}>
          Upgrade
        </Button>
      </Grid>
      <Grid item className={classes.blockWrapper}>
        <p className={clsx(classes.smallText, classes.yelloWText)}>
          Credits: <b>$10.00</b>
        </p>
        <IconButton
          size="small"
          className={clsx(
            classes.round,
            classes.buttonText,
            classes.purpleText,
          )}>
          <PlusIcon />
        </IconButton>
      </Grid>
      <Grid item className={classes.blockWrapper}>
        <p className={clsx(classes.smallText, classes.yelloWText)}>
          email@yahoo.com
        </p>
        <Button
          className={clsx(
            classes.button,
            classes.buttonText,
            classes.purpleText,
          )}>
          Logout
        </Button>
      </Grid>
    </Grid>
  );
};

export default AppBar;
