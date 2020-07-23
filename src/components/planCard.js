import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Icon from '@material-ui/core/Icon';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 442,
    borderRadius: 16,
    background: '#F7F7F7',
    maxWidth: 317,
  },
  bestCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 442,
    borderRadius: 16,
    background: '#FFDC00',
    maxWidth: 317,
  },
  basicTitle: {
    display: 'block',
    marginTop: 37,
    fontFamily: 'Duster Regular',
    fontSize: 48,
    textAlign: 'center',
    color: '#8C9DD0',
  },
  title: {
    display: 'block',
    marginTop: 37,
    fontFamily: 'Duster Regular',
    fontSize: 48,
    textAlign: 'center',
    color: '#3E245C',
  },
  button: {
    textDecoration: 'none',
    marginTop: 'auto',
    marginBottom: 32,
    width: '100%',
    maxWidth: 120,
    height: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 13,
    letterSpacing: '0.02em',
  },
  target: {
    marginTop: 22,
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: '0.02em',
    color: '#3E245C',
  },
  divider: {
    marginTop: 14,
    width: '70%',
    maxWidth: 210,
    height: 4,
    marginBottom: 17,
  },
  price: {
    fontFamily: 'Duster Bold',
    fontSize: 32,
    textAlign: 'center',
    color: '#3E245C',
  },
  billed: {
    fontFamily: 'PT Sans',
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: '0.02em',
    color: '#3E245C',
  },
  bonus: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '90%',
    minHeight: 77 - 30,
    padding: '15px 0',
    marginTop: 25,
    borderRadius: 100,
    background: '#FFDC00',
  },
  bonusDescription: {
    width: '70%',
    fontFamily: 'PT Sans',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#3E245C',
  },
  bold: {
    fontWeight: 'bold',
  },
});

const PlanCard = ({
  item: {name, target, dividerColor, price, billed, bonus, highlight},
}) => {
  const classes = useStyles();
  return (
    <div className={highlight ? classes.bestCard : classes.card}>
      <h6 className={name === 'Basic' ? classes.basicTitle : classes.title}>
        {name}
      </h6>
      <p className={classes.target}>{target}</p>
      <div className={classes.divider} style={{background: dividerColor}} />
      <p className={classes.price}>{price}</p>
      {billed && <p className={classes.billed}>{billed}</p>}
      {bonus && (
        <div
          className={classes.bonus}
          style={{background: name === 'Enterprise' ? '#3E245C' : '#FFDC00'}}>
          <Icon
            fontSize="large"
            className={classes.icon}
            style={{color: name === 'Enterprise' ? '#FFDC00' : '#FFF'}}>
            star
          </Icon>
          <p
            className={classes.bonusDescription}
            style={{color: name === 'Enterprise' ? '#FFF' : '#3E245C'}}>
            Bonus <span className={classes.bold}>{bonus.survey}</span> Survey{' '}
            <br /> Credits/
            {bonus.month} months
          </p>
        </div>
      )}
      <Link
        to={name === 'Elite' ? '/contacts' : `/${name.toLowerCase()}`}
        className={classes.button}
        style={
          name === 'Elite'
            ? {background: '#FFDC00', color: '#3E245C'}
            : {background: '#3E245C', color: '#FFDC00'}
        }>
        {name === 'Elite' ? 'Contact Us' : `Go ${name}`}
      </Link>
    </div>
  );
};

export default PlanCard;
