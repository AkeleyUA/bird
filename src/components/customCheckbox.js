import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import check from '../images/check.svg';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  small: {
    transform: 'scale(0.8)',
    borderWidth: 5,
  },
  icon: {
    borderRadius: 3,
    width: 20,
    height: 20,
    boxShadow: 'inset 0 0 0 1px #3E245C, inset 0 -1px 0 #3E245C',
    backgroundColor: '#f5f8fa',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#3E245C',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: `url(${check})`,
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#3E245C',
    },
  },
  center: {display: 'flex', alignItems: 'center'},
  label: {
    fontFamily: 'PT Sans',
    fontSize: 16,
    color: '#000',
    letterSpacing: '0.02em',
  },
  boldLabel: {
    fontFamily: 'PT Sans',
    fontSize: 16,
    color: '#000',
    letterSpacing: '0.02em',
    fontWeight: 'bold',
  },
});

export const CustomCheckbox = (props) => {
  const classes = useStyles();
  const {variant} = props;
  return (
    <Checkbox
      className={
        variant === 'small' ? clsx(classes.root, classes.small) : classes.root
      }
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
};
export const Label = ({icon, text}, props) => {
  const classes = useStyles();
  return (
    <div {...props} className={classes.center}>
      {icon && <img src={icon} alt={text} />}
      <span className={classes.label}>{text}</span>
    </div>
  );
};

export const BoldLabel = ({icon, text}, props) => {
  const classes = useStyles();
  return (
    <div {...props} className={classes.center}>
      {icon && <img src={icon} alt={text} />}
      <span className={classes.boldLabel}>{text}</span>
    </div>
  );
};
