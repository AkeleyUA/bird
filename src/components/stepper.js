import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import arrowRight from '../images/arrow-right.svg';

const useStyles = makeStyles({
  container: {
    marginTop: 41,
  },
  link: {
    display: 'flex',
    textDecoration: 'none',
    alignItems: 'center',
    zIndex: 1300,
  },
  linkText: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
    letterSpacing: '0.02em',
    color: '#3E245C',
    marginRight: 13,
  },
  linkGroupTitle: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: '0.02em',
    color: '#3E245C',
  },
  linkGroup: {},
  dividerActive: {
    width: '95%',
    height: 3,
    background: '#FFDC00',
  },
  dividerDisable: {
    width: '95%',
    height: 3,
    background: '#8C9DD0',
  },
  dividerFinish: {
    width: '95%',
    height: 3,
    background: '#3E245C',
  },
  roundActive: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
    borderRadius: '50%',
    background: '#FFDC00',
  },
  roundDisable: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
    borderRadius: '50%',
    background: '#8C9DD0',
  },
  roundFinish: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
    borderRadius: '50%',
    background: '#3E245C',
  },
  roundText: {
    fontFamily: 'Duster Bold',
    fontSize: 36,
    color: '#3E245C',
  },
  roundTextDisable: {
    fontFamily: 'Duster Bold',
    fontSize: 36,
    color: '#FFF',
  },
  roundTextFinish: {
    fontFamily: 'Duster Bold',
    fontSize: 36,
    color: '#FFDC00',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  activeStepLable: {
    maxWidth: 179,
    margin: '16px auto',
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: '0.02em',
    color: '#3E245C',
  },
  disableStepLable: {
    maxWidth: 179,
    margin: '16px auto',
    fontFamily: 'PT Sans',
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: '0.02em',
    color: '#8C9DD0',
  },
  finishStepLable: {
    maxWidth: 179,
    margin: '16px auto',
    fontFamily: 'PT Sans',
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: '0.02em',
    color: '#3E245C',
  },
});

const steps = [
  {
    step: 1,
    label: 'Select your target market & audience',
  },
  {
    step: 2,
    label: 'Select your target market & audience',
  },
  {
    step: 3,
    label: 'Select your target market & audience',
  },
  {
    step: 4,
    label: 'Select your target market & audience',
  },
];

const Stepper = ({currentStep}) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container} justify="center">
      <Grid item md={2}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          style={{height: '85.7%'}}>
          <Grid item xs={8} className={classes.linkGroup}>
            <h6 className={classes.linkGroupTitle}>New Survey</h6>
          </Grid>
          <Grid item md={4}>
            <div
              className={classes.dividerFinish}
              style={{marginLeft: 'auto', marginRight: -1}}
            />
          </Grid>
          <Grid item xs={12} style={{alignSelf: 'flex-start'}}>
            <Link to="/" className={classes.link}>
              <p className={classes.linkText}>Need Help?</p>
              <img src={arrowRight} alt="arrow-right" width="10%" />
            </Link>
          </Grid>
        </Grid>
      </Grid>
      {steps.map(({step, label}) => (
        <Grid item md={2} key={step}>
          {step < currentStep && (
            <Grid container justify="space-between" alignItems="center">
              <Grid item md={4}>
                <div className={classes.dividerFinish} />
              </Grid>
              <Grid item md={4} className={classes.center}>
                <div className={classes.roundFinish}>
                  <p className={classes.roundTextFinish}>{step}</p>
                </div>
              </Grid>
              <Grid item md={4}>
                <div
                  className={classes.dividerFinish}
                  style={{marginLeft: 'auto', marginRight: -1}}
                />
              </Grid>
              <Grid item xs={12}>
                <p className={classes.finishStepLable}>{label}</p>
              </Grid>
            </Grid>
          )}
          {step > currentStep && (
            <Grid container justify="space-between" alignItems="center">
              <Grid item md={4}>
                <div className={classes.dividerDisable} />
              </Grid>
              <Grid item md={4} className={classes.center}>
                <div className={classes.roundDisable}>
                  <p className={classes.roundTextDisable}>{step}</p>
                </div>
              </Grid>
              <Grid item md={4}>
                <div
                  className={classes.dividerDisable}
                  style={{marginLeft: 'auto', marginRight: -1}}
                />
              </Grid>
              <Grid item xs={12}>
                <p className={classes.disableStepLable}>{label}</p>
              </Grid>
            </Grid>
          )}
          {step === currentStep && (
            <Grid container justify="space-between" alignItems="center">
              <Grid item md={4}>
                <div className={classes.dividerActive} />
              </Grid>
              <Grid item md={4} className={classes.center}>
                <div className={classes.roundActive}>
                  <p className={classes.roundText}>{step}</p>
                </div>
              </Grid>
              <Grid item md={4}>
                <div
                  className={classes.dividerActive}
                  style={{marginLeft: 'auto', marginRight: -1}}
                />
              </Grid>
              <Grid item xs={12}>
                <p className={classes.activeStepLable}>{label}</p>
              </Grid>
            </Grid>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default Stepper;
