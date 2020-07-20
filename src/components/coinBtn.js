import React from 'react';
import {makeStyles} from '@material-ui/styles';
import coin from '../images/coin.svg';

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
    position: 'absolute',
    left: '33%',
    right: '24.93%',
    top: '33%',
    bottom: '53.33%',
  },
});

const CoinBtn = ({src, children}) => {
  const classes = useStyles();
  return (
    <button className={classes.coinBtn}>
      <div className={classes.coin}>
        <img src={src} className={classes.icon} />
      </div>
      <p className={classes.coinBtnTitle}>{children}</p>
    </button>
  );
};

export default CoinBtn;
