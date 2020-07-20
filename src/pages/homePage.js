import React from 'react';
import {makeStyles} from '@material-ui/styles';
import headerBG from '../images/header-bg.svg';
import Benefit from '../components/benefit';
import duck from '../images/duck.png';
import sun from '../images/sun.png';
import round from '../images/round.png';
import sluck from '../images/slack.png';
import triangle from '../images/triangle.png';
import lobule from '../images/lobule.svg';
import lobuleBlue from '../images/lobule-blue.svg';
import rain from '../images/rain.svg';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    maxWidth: 1440,
  },
  header: {
    height: 627,
    width: '100%',
    background: '#3E245C',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Duster Regular',
    fontSize: 72,
    letterSpacing: '0.02em',
    color: '#FFDC00',
    marginTop: 44,
  },
  description: {
    fontFamily: 'Duster Regular',
    fontSize: 36,
    textAlign: 'center',
    color: '#8C9DD0',
    marginTop: 20,
  },
  startBtn: {
    background: '#FFDC00',
    borderRadius: 8,
    fontFamily: 'Duster Regular',
    fontSize: 26,
    textAlign: 'center',
    color: '#000000',
    marginTop: 125,
    width: 280,
    height: 56,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: 140,
  },
  benefitWrapper: {
    position: 'relative',
  },
  duck: {
    position: 'absolute',
    top: -42,
    right: 5,
    zIndex: 1,
  },
  sun: {
    position: 'absolute',
    top: -50,
    left: -69,
    zIndex: 1,
  },
  round: {
    position: 'absolute',
    top: -59,
    right: 45,
    zIndex: 1,
  },
  sluck: {
    position: 'absolute',
    top: -37,
    left: -90,
    zIndex: 1,
  },
  triangle: {
    position: 'absolute',
    top: -19,
    right: 43,
    zIndex: 1,
  },
  plates: {
    marginTop: 112,
    display: 'flex',
    flexDirection: 'column',
  },
  yellowPlate: {
    padding: '75px 61px 48px 118px',
    width: '70%',
    marginLeft: '1.8%',
    background: '#FFDC00',
    position: 'relative',
  },
  yellowPlateBorder: {
    position: 'absolute',
    left: 9,
    top: 14,
    right: -9,
    bottom: -14,
    border: '1px solid #8C9DD0',
    zIndex: 1300,
  },
  lobule: {
    position: 'absolute',
    top: -23,
    right: -187,
  },
  lobuleBlue: {
    position: 'absolute',
    top: 118,
    right: -230,
  },
  rain: {
    position: 'absolute',
    top: 118 + 25,
    right: -345,
  },
  plateTitle: {
    fontSize: 48,
    fontFamily: 'Duster Regular',
  },
  divider: {
    width: '100%',
    height: 3,
    background: '#8C9DD0',
  },
  plateTextGroup: {
    display: 'flex',
  },
  descriptionGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  benefitText: {
    display: 'block',
    marginRight: 43,
    marginTop: 10,
    fontSize: 32,
    fontFamily: 'Duster Regular',
  },
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <img src={headerBG} />
        <h6 className={classes.title}>Surveys</h6>
        <p className={classes.description}>Simple. Powerfull. On Time.</p>
        <button className={classes.startBtn}>Start the Survey</button>
      </header>
      <main>
        <div className={classes.benefits}>
          <div className={classes.row}>
            <div className={classes.benefitWrapper}>
              <img alt="duck" src={duck} className={classes.duck} />
              <Benefit title="Time saving">
                24-72 hours from study activation to report
              </Benefit>
            </div>
            <div className={classes.benefitWrapper}>
              <img alt="sun" src={sun} className={classes.sun} />
              <Benefit title="Cost Effective​">
                Starting from $1 per voice of respondent.
              </Benefit>
            </div>
            <div className={classes.benefitWrapper}>
              <img alt="round" src={round} className={classes.round} />
              <Benefit title="Global Reach">
                Opening new vistas for our Clients by looking at new markets,
                searching new customers, understanding different audiences
                worldwide.
              </Benefit>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.benefitWrapper}>
              <img alt="sluck" src={sluck} className={classes.sluck} />
              <Benefit title="From Complexity to Clarity">
                Wise structure of forms and reports paired with user-friendly UI
                provide smart and simple answers on complex questions.
              </Benefit>
            </div>
            <div className={classes.benefitWrapper}>
              <img alt="triangle" src={triangle} className={classes.triangle} />
              <Benefit title="Reliability & Data Quality">
                Our reports maintain “certified” status, as they are built on
                world-class methods in data collection and analysis by industry
                best research specialists.
              </Benefit>
            </div>
          </div>
        </div>
        <div className={classes.plates}>
          <div className={classes.yellowPlate}>
            <div className={classes.yellowPlateBorder}></div>
            <img alt="lobule" src={lobule} className={classes.lobule} />
            <img alt="rain" src={rain} className={classes.rain} />
            <img
              alt="lobule-blue"
              src={lobuleBlue}
              className={classes.lobuleBlue}
            />
            <h6 className={classes.plateTitle}>Learn the Pricing Plans</h6>
            <div className={classes.divider} />
            <div className={classes.plateTextGroup}>
              <p className={classes.benefitText}>
                Starting from $1 per respondent voice
              </p>
              <div className={classes.descriptionGroup}>
                <p>
                  Favorable prices, subscriptions and regular client benefits,
                  transparent pricing policy.
                </p>
                <Link to="/">
                  <p>Pricing Plans</p>
                  <img />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
