import React from 'react';
import {makeStyles} from '@material-ui/styles';
import triangleToLeft from '../images/triangle-to-left.svg';
import triangleToRight from '../images/triangle-to-right.svg';

const useStyles = makeStyles({
  controler: {
    cursor: 'pointer',
  },
});

export const LeftContoler = (props) => {
  const classes = useStyles();
  return (
    <img
      {...props}
      alt="triangle-to-left"
      src={triangleToLeft}
      className={classes.controler}
    />
  );
};

export const RightContoler = (props) => {
  const classes = useStyles();
  return (
    <img
      {...props}
      alt="triangle-to-right"
      src={triangleToRight}
      className={classes.controler}
    />
  );
};
