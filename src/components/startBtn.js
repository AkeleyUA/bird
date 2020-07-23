import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  startBtn: {
    background: '#FFDC00',
    borderRadius: 8,
    fontFamily: 'Duster Bold',
    fontSize: 26,
    textAlign: 'center',
    color: '#000000',
    maxWidth: 280,
    minWidth: 200,
    width: '70%',
    height: 56,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const StartBtn = () => {
  const classes = useStyles();

  return <button className={classes.startBtn}>Start the Survey</button>;
};

export default StartBtn;
