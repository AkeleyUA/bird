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
    position: 'relative',
    zIndex: 5,
    fontSize: 48,
    color: '#3E245C',
    fontFamily: 'Duster Regular',
  },
  divider: {
    position: 'relative',
    zIndex: 5,
    width: '100%',
    height: 1,
    background: '#8C9DD0',
  },
  description: {
    position: 'relative',
    zIndex: 5,
    fontSize: 20,
    color: '#3E245C',
    fontFamily: 'PT Sans',
    marginTop: 10,
  },
  imgWrapper: {
    zIndex: 1,
  },
});

const Benefit = ({children, title, img}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.imgWrapper}>{img}</div>
      <h6 className={classes.title}>{title}</h6>
      <div className={classes.divider} />
      <p className={classes.description}>{children}</p>
    </div>
  );
};

export default Benefit;
