import React from 'react';
import {NavLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/styles';
import logo from '../images/logo.svg';
import settings from '../images/settings.svg';
import netWork from '../images/network.svg';
import plus from '../images/plus.svg';
import user from '../images/user.svg';
import CoinBtn from './coinBtn';

const useStyles = makeStyles({
  navContainer: {
    background: '#F7F7F7',
    width: '100%',
    maxWidth: 1440,
    height: 150,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightSide: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSide: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linksContainer: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
  },
  logo: {
    marginRight: 45,
    marginLeft: 40,
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'PT Sans, sans-serif',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: '0.02em',
    height: 37,
    marginTop: 8,
    borderRadius: 50,
    position: 'relative',
    padding: '8px 28px 8px 20px',
    color: '#3E245C',
    '&:active': {
      color: '#3E245C',
    },
    '& div': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: '#FFDC00',
      marginRight: 7,
    },
  },
  active: {
    background: '#FFDC00',
    '& div': {
      backgroundColor: '#F7F7F7',
    },
  },
  quickAcsessContainer: {
    position: 'relative',
    minWidth: 150,
    height: 106,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    minWidth: 250,
  },
  quickAcsess: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '9.43%',
    bottom: 0,
    background: 'transparent',
    border: '1px solid #FFDC00',
    borderRadius: 8,
  },
  quickAcsessTitle: {
    position: 'absolute',
    width: 73,
    height: 16,
    left: 18,
    top: 2,
    fontFamily: 'PT Sans, sans-serif',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 13,
    letterSpacing: '0.02em',
    color: '#8C9DD0',
    background: '#F7F7F7',
    padding: '0px 2px',
  },
  elipse: {
    position: 'absolute',
    width: 21,
    height: 21,
    right: 13,
    top: 0,
    background: '#F7F7F7',
  },
  settingsIcon: {
    position: 'absolute',
    width: 14,
    height: 13.97,
    right: 17.04,
    top: 2.96,
  },
  user: {
    marginLeft: 50,
    marginRight: 93,
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <nav className={classes.navContainer}>
      <div className={classes.leftSide}>
        <NavLink to="/">
          <img src={logo} className={classes.logo} />
        </NavLink>
        <div className={classes.linksContainer}>
          <NavLink
            className={classes.link}
            to="/Pricing"
            exact
            activeClassName={classes.active}>
            <div />
            Pricing
          </NavLink>
          <NavLink
            exact
            className={classes.link}
            to="/How it works?"
            activeClassName={classes.active}>
            <div className={classes.round} />
            How it works?
          </NavLink>
          <NavLink
            exact
            className={classes.link}
            to="/Products"
            activeClassName={classes.active}>
            <div className={classes.round} />
            Products
          </NavLink>
          <NavLink
            exact
            className={classes.link}
            to="/Industry Solutions"
            activeClassName={classes.active}>
            <div className={classes.round} />
            Industry Solutions
          </NavLink>
        </div>
      </div>
      <div className={classes.rightSide}>
        <div className={classes.quickAcsessContainer}>
          <div className={classes.quickAcsess} />
          <p className={classes.quickAcsessTitle}>Quick acsess</p>
          <div className={classes.elipse} />
          <img src={settings} className={classes.settingsIcon} />
          <CoinBtn src={netWork}>My Reports</CoinBtn>
          <CoinBtn src={plus}>New Survay</CoinBtn>
        </div>
        <div className={classes.user}>
          <CoinBtn src={user}>My Office</CoinBtn>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
