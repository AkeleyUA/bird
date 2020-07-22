import React from 'react';
import {makeStyles} from '@material-ui/styles';
import coin from '../images/coin.svg';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  coinBtn: {
    background: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    zIndex: 1300,
  },
  coin: {
    marginTop: 10,
    position: 'relative',
    width: 46,
    height: 46,
    background: `url(${coin})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coinBtnTitle: {
    fontFamily: 'PT Sans, sans-serif',
    fontWeight: 'bold',
    fontSize: 13,
    letterSpacing: '0.02em',
    color: '#3E245C',
    marginTop: 5,
  },
  icon: {
    color: '#8C9DD0',
  },
});

const CoinBtn = ({src, children, icon}) => {
  const classes = useStyles();
  return (
    <button className={classes.coinBtn}>
      <div className={classes.coin}>
        {src && <img src={src} alt="coin-icon" />}
        {icon && <Icon className={classes.icon}>{icon}</Icon>}
      </div>
      <p className={classes.coinBtnTitle}>{children}</p>
    </button>
  );
};

export default CoinBtn;
