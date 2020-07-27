import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';
import {Grid} from '@material-ui/core';
import brokenLineYellow from '../images/aboutPage/broken-line-yellow.svg';
import brokenLineBlue from '../images/aboutPage/broken-line-blue.svg';
import lobuleYellow from '../images/aboutPage/lobule-yellow.svg';
import lobuleBlue from '../images/aboutPage/lobule-blue.svg';
import rain from '../images/aboutPage/rain.svg';
import triangle from '../images/aboutPage/triangle.svg';
import plus from '../images/aboutPage/plus.svg';
import sun from '../images/aboutPage/sun.svg';
import brokenLineBlueReport1 from '../images/aboutPage/report/broken-line-blue-1.svg';
import brokenLineBlueReport2 from '../images/aboutPage/report/broken-line-blue-2.svg';
import bird from '../images/aboutPage/report/bird.svg';
import Invitation from '../components/invitation';
import {useLocation} from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    marginTop: 99,
  },
  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
    zIndex: -1,
  },
  absoluteTopIndex: {
    position: 'absolute',
    zIndex: 10,
  },
  pageTitile: {
    fontFamily: 'Duster Regular',
    fontSize: 72,
    color: '#3E245C',
    wordSpacing: 14,
    marginBottom: 76,
  },
  listText: {
    fontFamily: 'PT Sans',
    fontSize: 20,
    letterSpacing: '0.02em',
    color: ' #3E245C',
    marginBottom: 39,
  },
  promiseText: {
    fontFamily: 'PT Sans',
    fontSize: 20,
    letterSpacing: '0.02em',
    color: ' #000',
    marginBottom: 16,
  },
  purpleText: {
    color: '#3E245C',
  },
  yellowText: {
    color: '#FFDD00',
  },
  blueText: {
    color: '#8C9DD0',
  },
  bigTitle: {
    fontFamily: 'Duster Regular',
    fontSize: 96,
    marginBottom: 30,
  },
  bigNumbers: {
    fontFamily: 'Duster Regular',
    fontSize: 96,
  },
  subTitle: {
    fontFamily: 'Duster Regular',
    fontSize: 32,
  },
  descriptionBlock1: {
    paddingTop: 180,
    boxSizing: 'border-box',
  },
  brokenLineYellow: {
    top: 67,
    left: 20,
  },
  lobuleYellow: {
    top: 67,
    left: 260,
  },
  lobuleBlue: {
    top: 312,
    left: 354,
  },
  descriptionBlock2: {
    marginTop: 154,
  },
  withWitheBG: {
    background: '#FFF',
  },
  rain: {
    top: -130,
    left: -116,
  },
  brokenLineBlue: {
    right: -89,
    top: 30,
  },
  descriptionBlock3: {
    marginTop: 103,
  },
  triangle: {
    left: -325,
    top: -40,
  },
  descriptionBlock4: {
    marginTop: 103,
  },
  plus: {
    top: 0,
    left: -175,
  },
  brokenLineBlueForBlock3: {
    transform: 'rotate(-98deg)',
    top: 70,
    right: -148,
  },
  sun: {
    top: -130,
    right: 140,
  },
  brokenLineYellowForBlock4: {
    top: 170,
    left: 260,
  },
  reportContainer: {
    background: '#3E245C',
    paddingTop: 146,
    paddingBottom: 171,
    marginTop: 171,
    marginBottom: 146,
  },
  numbersDescription: {
    fontFamily: 'Duster Regular',
    fontSize: 48,
  },
  bird: {
    left: '13.5%',
    bottom: -10,
  },
  promisesContainer: {
    marginBottom: 103,
  },
  yellowLine: {
    position: 'absolute',
    left: -40,
    top: 22,
    width: 34,
    height: 1,
    background: '#FFDD00',
    transform: 'rotate(-45deg)',
  },
});

const AboutPage = () => {
  const classes = useStyles();
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Grid container justify="center">
      <Grid item container lg={11} className={classes.container}>
        <Grid item lg={12}>
          <h1 className={classes.pageTitile}>
            About <b className={classes.yellowText}>Yellow</b> Birds
          </h1>
        </Grid>
        <Grid item lg={3} className={classes.list}>
          <p className={classes.listText}>
            We are catalysts for change, turning problems into opportunities.
            Reframing difficulties. Empowering people, teams, and networks. ​
          </p>
          <p className={classes.listText}>
            Creating flexible, win/win solutions for all involved in a situation
          </p>
          <p className={classes.listText}>
            We uncover solutions to create something from nothing — or turn a
            mess into a miracle.​
          </p>
        </Grid>
        <Grid item lg={2} />
        <Grid
          item
          container
          lg={7}
          className={clsx(classes.descriptionBlock1, classes.relative)}>
          <img
            src={brokenLineYellow}
            alt="broken-line"
            className={clsx(classes.brokenLineYellow, classes.absolute)}
          />
          <img
            src={lobuleYellow}
            alt="lobule-yellow"
            className={clsx(classes.lobuleYellow, classes.absolute)}
          />
          <img
            src={lobuleBlue}
            alt="lobule-blue"
            className={clsx(classes.lobuleBlue, classes.absolute)}
          />
          <Grid item lg={4} />
          <Grid item lg={8}>
            <h6 className={clsx(classes.subTitle, classes.blueText)}>
              We Value
            </h6>
            <h6 className={clsx(classes.bigTitle, classes.purpleText)}>
              Curiosity
            </h6>
          </Grid>
          <Grid item lg={6}>
            <p className={classes.listText}>
              Explore and Learn. Constantly push personal and the teams’
              boundaries to know more and learn new.
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container lg={11}>
        <Grid
          item
          container
          lg={6}
          className={clsx(classes.descriptionBlock2, classes.relative)}>
          <img
            src={brokenLineBlue}
            alt="broken-line"
            className={clsx(classes.brokenLineBlue, classes.absolute)}
          />
          <img
            src={rain}
            alt="rain"
            className={clsx(classes.rain, classes.absolute)}
          />
          <Grid item container lg={12} justify="flex-end">
            <Grid item lg={6}>
              <h6 className={clsx(classes.subTitle, classes.blueText)}>
                We Value
              </h6>
            </Grid>
          </Grid>
          <Grid item lg={6}>
            <h6
              className={clsx(
                classes.bigTitle,
                classes.yellowText,
                classes.withWitheBG,
              )}>
              Diversity​
            </h6>
          </Grid>
          <Grid item container lg={12} justify="flex-end">
            <Grid item lg={6}>
              <p className={classes.listText}>
                Diversify tools, approaches, thinking, teams, empowering our
                footprint in the markets and societies.​
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container lg={12} justify="flex-end">
        <Grid
          item
          container
          lg={5}
          justify="center"
          className={clsx(classes.descriptionBlock3, classes.relative)}>
          <img
            src={triangle}
            alt="triangle"
            className={clsx(classes.triangle, classes.absolute)}
          />
          <Grid item lg={6}>
            <h6 className={clsx(classes.subTitle, classes.blueText)}>
              We Value
            </h6>
          </Grid>
          <Grid item lg={11}>
            <h6 className={clsx(classes.bigTitle, classes.blueText)}>
              Co-creation
            </h6>
          </Grid>
          <Grid item lg={12} container justify="flex-end">
            <Grid item lg={9}>
              <p className={classes.listText}>
                Exchange ideas, experience and knowledge fuels valuable and
                actionable insights and solutions.
              </p>
              <p className={classes.listText}>
                Embrace the power of the team for sustainable leadership.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container lg={9}>
        <Grid
          item
          container
          lg={5}
          className={clsx(classes.descriptionBlock4, classes.relative)}>
          <img
            src={brokenLineBlue}
            alt="broken-line"
            className={clsx(classes.brokenLineBlueForBlock3, classes.absolute)}
          />
          <img
            src={plus}
            alt="plus"
            className={clsx(classes.plus, classes.absolute)}
          />
          <Grid item lg={12}>
            <h6 className={clsx(classes.subTitle, classes.yellowText)}>
              We Value
            </h6>
          </Grid>
          <Grid item lg={12}>
            <h6 className={clsx(classes.bigTitle, classes.purpleText)}>
              Fairness​
            </h6>
          </Grid>
          <Grid item container lg={12} justify="flex-end">
            <Grid item lg={6}>
              <p className={classes.listText}>
                Everyone voice is equally important.​
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        lg={12}
        className={clsx(classes.descriptionBlock4, classes.relative)}>
        <img
          src={sun}
          alt="sun"
          className={clsx(classes.sun, classes.absolute)}
        />
        <img
          src={brokenLineYellow}
          alt="plus"
          className={clsx(classes.brokenLineYellowForBlock4, classes.absolute)}
        />
        <Grid item container lg={12} justify="center">
          <Grid item lg={3}>
            <h6 className={clsx(classes.subTitle, classes.blueText)}>
              We Value
            </h6>
          </Grid>
        </Grid>
        <Grid item container lg={12} justify="center">
          <Grid item lg={3}>
            <h6 className={clsx(classes.bigTitle, classes.blueText)}>
              Excellence
            </h6>
          </Grid>
        </Grid>
        <Grid item container lg={10} justify="flex-end">
          <Grid item lg={4}>
            <p className={classes.listText}>
              we excel in what we do, bringing the best talent, empowering our
              offer with expert know-how​
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        lg={12}
        className={clsx(classes.reportContainer, classes.relative)}>
        <img
          src={bird}
          alt="bird"
          className={clsx(classes.bird, classes.absoluteTopIndex)}
        />
        <Grid item container lg={6} alignItems="center" justify="flex-end">
          <Grid item container lg={4} justify="flex-end">
            <Grid item lg={9}>
              <img src={brokenLineBlueReport1} alt="broken-line-blue" />
            </Grid>
          </Grid>
          <Grid item lg={8}>
            <h6 className={clsx(classes.bigNumbers, classes.yellowText)}>
              245,795
            </h6>
          </Grid>
          <Grid item lg={8}>
            <h6 className={clsx(classes.numbersDescription, classes.blueText)}>
              Users Joined
            </h6>
          </Grid>
        </Grid>
        <Grid item container lg={6} alignItems="center" justify="flex-end">
          <Grid item container lg={4} justify="flex-end">
            <Grid item lg={11}>
              <img src={brokenLineBlueReport2} alt="broken-line-blue" />
            </Grid>
          </Grid>
          <Grid item lg={8}>
            <h6 className={clsx(classes.bigNumbers, classes.yellowText)}>
              484,330
            </h6>
          </Grid>
          <Grid item lg={8}>
            <h6 className={clsx(classes.numbersDescription, classes.blueText)}>
              Answers Provided
            </h6>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        lg={8}
        justify="center"
        className={classes.promisesContainer}>
        <Grid item lg={4}>
          <h6 className={clsx(classes.numbersDescription, classes.purpleText)}>
            Our promise
          </h6>
        </Grid>
        <Grid item lg={7}>
          {[
            'Our products and service are transformative​',
            'We expand our customers’ views beyond formal data​​',
            'We offer a new-age quality​​',
            'Our insights are consciousness-expanding​​',
            'We find solutions to unveil hidden insights, enhance clarity​​',
            'We are user-friendly​​',
            'We offer a very new, contemporary product​​',
            'We are medium- to high-priced​​',
            'We help people and companies transform their world, inspire change, expand consciousness.​',
          ].map((promise, index) => (
            <div key={index} className={classes.relative}>
              <p className={clsx(classes.promiseText)}>{promise}</p>
              <div className={classes.yellowLine} />
            </div>
          ))}
        </Grid>
      </Grid>
      <Grid item lg={12}>
        <Invitation />
      </Grid>
    </Grid>
  );
};

export default AboutPage;
