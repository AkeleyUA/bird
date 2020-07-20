import React from 'react';
import {makeStyles} from '@material-ui/styles';
import dotsGrid from '../images/dots-grid.svg';
import doubleCross from '../images/double-cross.svg';
import arrowRight from '../images/arrow-right-grey.svg';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  plate: {
    marginTop: 58,
    padding: '75px 61px 48px 118px',
    maxWidth: 1034 - 61 - 118,
    width: 'calc(75% - 61px - 118px)',
    marginLeft: '1.8%',
    background: '#3E245C',
    position: 'relative',
    marginBottom: 137,
  },
  plateBorder: {
    position: 'absolute',
    right: 9,
    top: 14,
    left: -9,
    bottom: -14,
    border: '1px solid #8C9DD0',
    zIndex: 1300,
  },
  dotsGrid: {
    position: 'absolute',
    top: -25,
    right: '-23.7%',
  },
  doubleCross: {
    position: 'absolute',
    top: 258,
    right: '-6.3%',
  },
  title: {
    fontSize: 48,
    fontFamily: 'Duster Regular',
    marginBottom: 4,
    color: '#FFDC00',
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
    color: '#FFDC00',
  },
  description: {
    fontFamily: 'PT Sans',
    fontSize: 20,
    letterSpacing: '0.02em',
    color: '#FFDC00',
    marginTop: 12,
    marginBottom: 41,
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
    color: '#8C9DD0',
    marginRight: 13,
  },
});

const YellowPlate = () => {
  const classes = useStyles();
  return (
    <div className={classes.plate}>
      <div className={classes.plateBorder}></div>

      <img alt="dots-grid" src={dotsGrid} className={classes.dotsGrid} />
      <img
        alt="double-cross"
        src={doubleCross}
        className={classes.doubleCross}
      />
      {/* <img alt="lobule" src={lobule} className={classes.lobule} />
      <img alt="rain" src={rain} className={classes.rain} />
      <img alt="lobule-blue" src={lobuleBlue} className={classes.lobuleBlue} /> */}
      <h6 className={classes.title}>About the workflow</h6>
      <div className={classes.divider} />
      <div className={classes.textGroup}>
        <p className={classes.benefitText}>How to get started</p>
        <div className={classes.descriptionGroup}>
          <p className={classes.description}>
            Seamless user-friendly system to explore customers and societies.
          </p>
          <Link to="/" className={classes.link}>
            <p className={classes.linkText}>How it Works?</p>
            <img
              className={classes.linkImg}
              alt="arrow-right"
              src={arrowRight}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YellowPlate;
