import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/styles';
import logo from '../images/logo.svg';
import settings from '../images/settings.svg';
import netWork from '../images/network.svg';
import plus from '../images/plus.svg';
import user from '../images/user.svg';
import CoinBtn from './coinBtn';
import {Hidden, Drawer, Button} from '@material-ui/core';

const useStyles = makeStyles({
  navContainer: {
    background: '#F7F7F7',
    width: '100%',
    maxWidth: 1440,
    padding: '10px 0',
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
  logoButton: {
    borderRadius: '50%',
  },
  link: {
    display: 'flex',
    justifyContent: 'flex-start',
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
    textTransform: 'none',
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
    '&:hover': {
      background: '#FFDC00',
    },
  },
  quickAcsessContainer: {
    position: 'relative',
    height: 106,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    minWidth: 200,
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
    marginRight: 50,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuBtnWrapper: {
    marginLeft: 50,
  },
  menu: {
    padding: 15,
  },
});

const links = [
  {
    name: 'Pricing',
    path: '/pricing',
  },
  {
    name: 'How it works?',
    path: '/how-it-works',
  },
  {
    name: 'Products',
    path: '/products',
  },
  {
    name: 'About',
    path: '/about',
  },
];

const Links = ({onClick}) => {
  const classes = useStyles();
  return links.map(({path, name}) => (
    <Button
      key={path}
      onClick={onClick}
      className={classes.link}
      component={NavLink}
      to={path}
      activeClassName={classes.active}
      startIcon={<div className={classes.round} />}>
      {name}
    </Button>
  ));
};
const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const closeHandler = () => {
    setOpen(false);
  };

  const openHandler = () => {
    setOpen(true);
  };

  return (
    <nav className={classes.navContainer}>
      <div className={classes.leftSide}>
        <Hidden smDown>
          <NavLink to="/" className={classes.logoButton}>
            <img src={logo} className={classes.logo} alt="logo" />
          </NavLink>
          <div className={classes.linksContainer}>
            <Links />
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className={classes.menuBtnWrapper} onClick={openHandler}>
            <CoinBtn icon="menu">Menu</CoinBtn>
          </div>
          <Drawer anchor="left" open={open} onClose={closeHandler}>
            <div className={classes.menu}>
              <Button to="/" onClick={closeHandler} component={NavLink}>
                <img src={logo} className={classes.logo} alt="logo" />
              </Button>
              <Links onClick={closeHandler} />
            </div>
          </Drawer>
        </Hidden>
      </div>
      <div className={classes.rightSide}>
        <Hidden only="xs">
          <div className={classes.quickAcsessContainer}>
            <div className={classes.quickAcsess} />
            <p className={classes.quickAcsessTitle}>Quick acsess</p>
            <div className={classes.elipse} />
            <img
              src={settings}
              className={classes.settingsIcon}
              alt="settings-icon"
            />
            <CoinBtn src={netWork}>My Reports</CoinBtn>
            <Link to="/new-survey" style={{textDecoration: 'none'}}>
              <CoinBtn src={plus}>New Survey</CoinBtn>
            </Link>
          </div>
        </Hidden>
        <div className={classes.user}>
          <Link to="/my-office" style={{textDecoration: 'none'}}>
            <CoinBtn src={user}>My Office</CoinBtn>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
