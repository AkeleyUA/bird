import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, Hidden} from '@material-ui/core';
import Invitation from '../components/invitation';
import stepImg1 from '../images/step-1-img.svg';
import stepImg2 from '../images/step-2-img.svg';
import stepImg3 from '../images/step-3-img.svg';
import {useLocation} from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    overflow: 'visible',
  },
  pageTitile: {
    fontFamily: 'Duster Regular',
    fontSize: 48,
    color: '#3E245C',
    marginTop: 92,
  },
  yellowText: {
    fontFamily: 'Duster Regular',
    fontSize: 70,
    color: '#FFDC00',
  },
  bigBanner: {
    maxWidth: 1275,
    minHeight: 213,
    background: '#3E245C',
    margin: '0 auto',
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 67,
    padding: '15px 0',
  },
  bigBannerTitle: {
    fontFamily: 'Duster Regular',
    fontSize: 48,
    color: '#FFF',
  },
  verticalDivider: {
    width: 1,
    height: 119,
    background: '#8C9DD0',
  },
  horizontalDivider: {
    width: '50%',
    height: 1,
    background: '#8C9DD0',
    margin: '15px 0',
  },
  bigBannerDescription: {
    maxWidth: 560,
    fontFamily: 'PT Sans',
    fontSize: 20,
    letterSpacing: '0.02em',
    color: '#FFF',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  steps: {
    margin: '0 auto',
    width: '85%',
    minHeight: 770,
  },
  step: {
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    marginBottom: 40,
  },
  step2: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    position: 'relative',
    marginBottom: 40,
  },
  stepNumber: {
    fontFamily: 'Duster Regular',
    fontSize: 200,
    color: '#FFDC00',
  },
  stepTitle: {
    fontFamily: 'Duster Regular',
    fontSize: 48,
    color: '#3E245C',
    marginBottom: 45,
  },
  stepDescriptionText: {
    maxWidth: 309,
    fontFamily: 'PT Sans',
    fontSize: 20,
    letterSpacing: '0.02em',
    color: '#333333',
  },
  purpleText: {
    color: '#3E245C',
  },
  stepDescription: {
    position: 'relative',
    marginBottom: 26,
  },
  stepDescriptionDot: {
    width: 8,
    height: 8,
    background: '#FFDC00',
    borderRadius: '50%',
    position: 'absolute',
    top: 9,
    left: -28,
  },
  stepImg1: {
    position: 'absolute',
    top: -17,
    left: -113,
    zIndex: -5,
  },
  stepImg2: {
    position: 'absolute',
    top: -94,
    left: -9,
    zIndex: -5,
  },
  stepImg3: {
    position: 'absolute',
    top: -9,
    left: 61,
    zIndex: -5,
  },
});

const HowItWorksPage = () => {
  const classes = useStyles();
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Grid container className={classes.container} justify="center">
      <Grid sm={10} xs={11} item component="h6" className={classes.pageTitile}>
        How It Works<b style={{color: '#FFDC00'}}>?</b>
      </Grid>
      <Grid item xs={11}>
        <Grid container className={classes.bigBanner} justify="center">
          <Grid item lg={5} md={5} sm={5} xs={11} className={classes.center}>
            <h6 className={classes.bigBannerTitle}>
              <b className={classes.yellowText}>Three Easy Steps </b>
              <br />
              to the Powerful Insights​
            </h6>
          </Grid>
          <Hidden only="xs">
            <Grid item lg={1} md={1} sm={1} xs={11} className={classes.center}>
              <div className={classes.verticalDivider} />
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid item lg={1} md={1} sm={1} xs={11} className={classes.center}>
              <div className={classes.horizontalDivider} />
            </Grid>
          </Hidden>
          <Grid item lg={6} md={6} sm={6} xs={11}>
            <p className={classes.bigBannerDescription}>
              <b>
                Our platform is powerful to meet the advanced research needs,{' '}
              </b>
              yet simple and easy enough for anyone to use. Just three steps and
              you are ready to launch!
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" className={classes.steps}>
          <Grid item xs={11} sm={11} md={6} lg={4} className={classes.step}>
            <img src={stepImg1} alt="step-1-img" className={classes.stepImg1} />
            <h6 className={classes.stepNumber}>1</h6>
            <h1 className={classes.stepTitle}>
              Select Your <br /> Target Market <br />& Audience​
            </h1>
            <div className={classes.stepDescription}>
              <p className={classes.stepDescriptionText}>
                Choose the target market for your business insight. Select the
                audience profile to reach the
                <b className={classes.purpleText}> millions of consumers</b>.​
              </p>
              <div className={classes.stepDescriptionDot} />
            </div>
          </Grid>
          <Grid item xs={11} sm={11} md={6} lg={4} className={classes.step2}>
            <img src={stepImg2} alt="step-2-img" className={classes.stepImg2} />
            <h6 className={classes.stepNumber}>2</h6>
            <h1 className={classes.stepTitle}>
              Choose the Survey <br /> & Design Custom <br />
              Questions
            </h1>
            <div className={classes.stepDescription}>
              <p className={classes.stepDescriptionText}>
                Select the Survey among the
                <b className={classes.purpleText}> ready to use tools </b>for
                various business objectives.
              </p>
              <div className={classes.stepDescriptionDot} />
            </div>
            <div className={classes.stepDescription}>
              <p className={classes.stepDescriptionText}>
                <b className={classes.purpleText}>Add custom questions </b>
                to the master instrument using skip logic, randomization,
                open-ended, image, video and NPS question types.
              </p>
              <div className={classes.stepDescriptionDot} />
            </div>
          </Grid>
          <Grid item xs={11} sm={11} md={6} lg={4} className={classes.step}>
            <img src={stepImg3} alt="step-3-img" className={classes.stepImg3} />
            <h6 className={classes.stepNumber}>3</h6>
            <h1 className={classes.stepTitle}>
              We Collect Responses, <br /> in 24-72h You Get <br /> Report &
              Data
            </h1>
            <div className={classes.stepDescription}>
              <p className={classes.stepDescriptionText}>
                <b className={classes.purpleText}>Get results in real-time</b>{' '}
                rather than waiting weeks.
              </p>
              <div className={classes.stepDescriptionDot} />
            </div>
            <div className={classes.stepDescription}>
              <p className={classes.stepDescriptionText}>
                Get
                <b className={classes.purpleText}>
                  {' '}
                  user-friendly analytical report{' '}
                </b>
                and raw data to easily analyze results.
              </p>
              <div className={classes.stepDescriptionDot} />
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Invitation />
      </Grid>
    </Grid>
  );
};

export default HowItWorksPage;
