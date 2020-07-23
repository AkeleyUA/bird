import React from 'react';
import crossYellow from '../images/cross-yellow.svg';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  crossYellow: {
    position: 'absolute',
    bottom: -55,
    right: 42,
  },
});
const YellowCross = () => {
  const classes = useStyles();
  return (
    <img alt="cross-yellow" src={crossYellow} className={classes.crossYellow} />
  );
};

export default YellowCross;
