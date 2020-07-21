import React from 'react';
import {makeStyles} from '@material-ui/styles';
import thinkShadow from '../images/think-blue-shadow.svg';
import thinkIcon from '../images/think-blue.svg';
import thinkDot from '../images/think-blue-dot.svg';

const useStyles = makeStyles({
  thinkShadow: {
    position: 'absolute',
    top: 10,
    left: 383,
    zIndex: 1,
  },
  thinkIcon: {
    position: 'absolute',
    top: 0,
    left: 365,
    zIndex: 2,
  },
  thinkDot: {
    position: 'absolute',
    top: 81,
    left: 379,
  },
});

const ThinkImage = () => {
  const classes = useStyles();
  return (
    <>
      <img
        alt="think-shadow"
        src={thinkShadow}
        className={classes.thinkShadow}
      />
      <img alt="think-icon" src={thinkIcon} className={classes.thinkIcon} />
      <img alt="think-dot" src={thinkDot} className={classes.thinkDot} />
    </>
  );
};

export default ThinkImage;
