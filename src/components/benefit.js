import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    width: 297,
    minHeight: 176,
    zIndex: 1300,
    position: 'relative',
    marginBottom: 100,
  },
  title: {
    fontSize: 48,
    color: '#3E245C',
    fontFamily: 'Duster Regular',
  },
  divider: {
    width: '100%',
    height: 1,
    background: '#8C9DD0',
  },
  description: {
    fontSize: 20,
    color: '#3E245C',
    fontFamily: 'PT Sans',
    marginTop: 10,
  },
});

const Benefit = ({children, title}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h6 className={classes.title}>{title}</h6>
      <div className={classes.divider} />
      <p className={classes.description}>{children}</p>
    </div>
  );
};

export default Benefit;
