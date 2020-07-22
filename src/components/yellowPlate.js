import React from 'react';
import {makeStyles} from '@material-ui/styles';
import lobule from '../images/lobule.svg';
import lobuleBlue from '../images/lobule-blue.svg';
import rain from '../images/rain.svg';
import arrowRight from '../images/arrow-right.svg';
import {Link} from 'react-router-dom';
import {Grid, Hidden} from '@material-ui/core';

const useStyles = makeStyles({
  plate: {
    padding: '75px 0 48px 0',
    marginLeft: '1.8%',
    background: '#FFDC00',
    position: 'relative',
  },
  plateBorder: {
    position: 'absolute',
    left: 9,
    top: 14,
    right: -9,
    bottom: -14,
    border: '1px solid #8C9DD0',
    zIndex: 1300,
  },
  lobule: {
    position: 'absolute',
    top: -23,
    right: '-18.5%',
  },
  lobuleBlue: {
    position: 'absolute',
    top: 118,
    right: '-22.5%',
  },
  rain: {
    position: 'absolute',
    top: 118 + 25,
    right: '-33.5%',
  },
  title: {
    fontSize: 48,
    fontFamily: 'Duster Regular',
    marginBottom: 4,
    color: '#3E245C',
  },
  divider: {
    width: '100%',
    height: 3,
    background: '#8C9DD0',
  },
  textGroup: {
    display: 'flex',
  },
  descriptionGroup: {
    maxWidth: 341,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  benefitText: {
    display: 'block',
    marginRight: 43,
    marginTop: 10,
    fontSize: 32,
    fontFamily: 'Duster Regular',
    color: '#3E245C',
  },
  description: {
    fontFamily: 'PT Sans',
    fontSize: 20,
    letterSpacing: '0.02em',
    color: '#3E245C',
    marginTop: 12,
  },
  link: {
    display: 'flex',
    marginTop: 30,
    textDecoration: 'none',
    alignItems: 'center',
    zIndex: 1300,
  },
  linkText: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: '0.02em',
    color: '#3E245C',
    marginRight: 13,
  },
  contentWrapper: {
    maxWidth: 854,
    width: '90%',
    margin: '0 auto',
  },
});

const YellowPlate = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item lg={9} md={8} xs={11} className={classes.plate}>
        <div className={classes.contentWrapper}>
          <div className={classes.plateBorder}></div>
          <Hidden smDown>
            <img alt="lobule" src={lobule} className={classes.lobule} />
            <img alt="rain" src={rain} className={classes.rain} />
            <img
              alt="lobule-blue"
              src={lobuleBlue}
              className={classes.lobuleBlue}
            />
          </Hidden>
          <h6 className={classes.title}>Learn the Pricing Plans</h6>
          <div className={classes.divider} />
          <div className={classes.textGroup}>
            <p className={classes.benefitText}>
              Starting from $1 per respondent voice
            </p>
            <div className={classes.descriptionGroup}>
              <p className={classes.description}>
                Favorable prices, subscriptions and regular client benefits,
                transparent pricing policy.
              </p>
              <Link to="/" className={classes.link}>
                <p className={classes.linkText}>Pricing Plans</p>
                <img
                  className={classes.linkImg}
                  alt="arrow-right"
                  src={arrowRight}
                />
              </Link>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default YellowPlate;
