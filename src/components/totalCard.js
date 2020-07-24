import React from 'react';
import smallCoin from '../images/small-coin.svg';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  card: {
    marginBottom: 30,
  },
  inline: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 17,
  },
  title: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: '0.02em',
    color: '#222222',
  },
  description: {
    marginLeft: 41,
    fontFamily: 'Duster Bold',
    fontSize: 26,
    color: '#3E245C',
    maxWidth: '75%',
  },
  img: {
    marginRight: 10,
  },
});

const TotalCard = ({title, description}) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className={classes.inline}>
        <img src={smallCoin} alt="small-coin" className={classes.img} />
        <h6 className={classes.title}>{title}</h6>
      </div>
      <div>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
};

export default TotalCard;
