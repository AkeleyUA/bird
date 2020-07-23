import React from 'react';
import {makeStyles} from '@material-ui/styles';
import mediumBrokenLineBlue from '../images/medium-broken-line-blue.svg';

const useStyles = makeStyles({
  invitation: {
    maxWidth: 1139,
    width: '79%',
    margin: '0 auto',
    background: '#F7F7F7',
    marginTop: 96,
    marginBottom: 42,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '45px 0',
    position: 'relative',
  },
  invitationTitle: {
    fontFamily: 'Duster Regular',
    fontSize: 26,
    textAlign: 'center',
    color: '#3E245C',
    marginBottom: 16,
  },
  mediumBrokenLineBlue: {
    position: 'absolute',
    left: '20.58%',
    top: -10,
  },
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

const Invitation = () => {
  const classes = useStyles();

  return (
    <div className={classes.invitation}>
      <img
        className={classes.mediumBrokenLineBlue}
        alt="medium-broken-line-blue"
        src={mediumBrokenLineBlue}
      />
      <h3 className={classes.invitationTitle}>
        Construct your new questionnaire
      </h3>
      <button className={classes.startBtn}>Start the Survey</button>
    </div>
  );
};

export default Invitation;
