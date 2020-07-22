import React from 'react';
import {makeStyles} from '@material-ui/styles';
import round from '../images/round.svg';
import roundBlue from '../images/round-blue.svg';
import brokenLine from '../images/broken-line.svg';
import brokenLineBlue from '../images/broken-line-blue.svg';
import arrowRight from '../images/arrow-right.svg';
import {Link} from 'react-router-dom';
import {Grid, Hidden} from '@material-ui/core';

const useStyles = makeStyles({
  plate: {
    marginTop: 67,
    padding: '75px 0 48px 0',
    marginRight: '1.8%',
    background: '#8C9DD0',
    position: 'relative',
  },
  contentWrapper: {
    maxWidth: 854,
    width: '90%',
    margin: '0 auto',
  },
  plateBorder: {
    position: 'absolute',
    left: 9,
    top: 14,
    right: -9,
    bottom: -14,
    border: '1px solid #FFDC00',
    zIndex: 1300,
  },
  round: {
    position: 'absolute',
    top: 101,
    left: -159,
  },
  roundBlue: {
    position: 'absolute',
    top: 0,
    left: -261,
  },
  brokenLine: {
    position: 'absolute',
    top: 73,
    left: -378,
  },
  brokenLineBlue: {
    position: 'absolute',
    top: 103,
    left: -375,
  },
  title: {
    fontSize: 48,
    fontFamily: 'Duster Regular',
    marginBottom: 4,
    color: '#FFFFFF',
  },
  divider: {
    width: '100%',
    height: 3,
    background: '#FFDC00',
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
    color: '#FFFFFF',
  },
  description: {
    fontFamily: 'PT Sans',
    fontSize: 20,
    letterSpacing: '0.02em',
    color: '#FFFFFF',
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
});

const BluePlate = () => {
  const classes = useStyles();
  return (
    <Grid container justify="flex-end">
      <Grid item lg={9} md={8} xs={11} className={classes.plate}>
        <div className={classes.contentWrapper}>
          <div className={classes.plateBorder}></div>
          <Hidden smDown>
            <img alt="round" src={round} className={classes.round} />
            <img
              alt="round-blue"
              src={roundBlue}
              className={classes.roundBlue}
            />
            <img
              alt="broken-line"
              src={brokenLine}
              className={classes.brokenLine}
            />
            <img
              alt="broken-line-blue"
              src={brokenLineBlue}
              className={classes.brokenLineBlue}
            />
          </Hidden>
          <h6 className={classes.title}>Downloadable Report & Survey Data </h6>
          <div className={classes.divider} />
          <div className={classes.textGroup}>
            <p className={classes.benefitText}>
              with actionable business insights
            </p>
            <div className={classes.descriptionGroup}>
              <p className={classes.description}>
                We excel in what we do. Our experts and know-how fuel
                beyond-just-data actionable insights.
              </p>
              <Link to="/" className={classes.link}>
                <p className={classes.linkText}>Explore Report Examples</p>
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

export default BluePlate;
