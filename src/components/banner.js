import React from 'react';
import {makeStyles} from '@material-ui/styles';
import bigCoin from '../images/big-coin.svg';

const useStyles = makeStyles({
  container: {
    width: 445 - 37,
    minWidth: 300 - 37,
    background: '#F7F7F7',
    padding: '37px 0 37px 37px',
    display: 'flex',
    marginTop: 30,
  },
  bigCoin: {
    marginLeft: -50,
    marginRight: 22,
  },
  title: {
    fontFamily: 'Duster Regular',
    fontWeight: 'normal',
    fontSize: 36,
    color: '#3E245C',
  },
  description: {
    display: 'block',
    marginTop: 11,
    fontFamily: 'Duster Regular',
    fontSize: 24,
    color: '#8C9DD0',
  },
});

const Banner = ({title, children}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img alt="big-coin" src={bigCoin} className={classes.bigCoin} />
      <div>
        <h6 className={classes.title}>{title}</h6>
        <p className={classes.description}>{children}</p>
      </div>
    </div>
  );
};

export default Banner;
