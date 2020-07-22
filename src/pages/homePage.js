import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {makeStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';
import headerBG from '../images/header-bg.svg';
import Benefit from '../components/benefit';
import duck from '../images/duck.png';
import sun from '../images/sun.png';
import round from '../images/round.png';
import sluck from '../images/slack.png';
import triangle from '../images/triangle.png';
import YellowPlate from '../components/yellowPlate';
import BluePlate from '../components/bluePlate';
import PurplePlate from '../components/purplePlate';
import QuestionsImage from '../components/questionsImage';
import ThinkImage from '../components/thinkImage';
import smallBrokenLine from '../images/small-broken-line.svg';
import smallBrokenLineBlue from '../images/small-broken-line-blue.svg';
import bird from '../images/bird.svg';
import brokenLine from '../images/long-broken-line.svg';
import brokenLineBlue from '../images/long-broken-line-blue.svg';
import arrowRight from '../images/arrow-right.svg';
import mediumBrokenLineBlue from '../images/medium-broken-line-blue.svg';
import Carousel from '../components/carousel';
import {Grid, Hidden} from '@material-ui/core';

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
  headerBG: {
    width: '67.5%',
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
    marginBottom: 125,
  },
  startBtn: {
    background: '#FFDC00',
    borderRadius: 8,
    fontFamily: 'Duster Regular',
    fontSize: 26,
    textAlign: 'center',
    color: '#000000',
    maxWidth: 280,
    width: '70%',
    height: 56,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  benefits: {
    marginTop: 140,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  benefitGridItem: {
    display: 'flex',
    justifyContent: 'center',
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
    maxWidth: 1440,
    marginTop: 12,
    display: 'flex',
    flexDirection: 'column',
  },
  questions: {
    position: 'relative',
  },
  smallBrokenLine: {
    position: 'absolute',
    left: 160,
    top: 27,
  },
  smallBrokenLineBlue: {
    position: 'absolute',
    left: 207,
    top: 56,
  },
  questionCards: {
    width: '95%',
    display: 'flex',
    justifyContent: 'space-around',
    minHeight: 421,
    height: 'calc(100% + 100px)',
    margin: '0 auto',
    flexWrap: 'wrap',
  },
  card: {
    marginTop: 83,
    maxWidth: 375 + 50,
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    '&:nth-child(1)': {
      alignSelf: 'flex-end',
    },
    '&:nth-child(2)': {
      alignSelf: 'center',
    },
    '&:nth-child(3)': {
      alignSelf: 'flex-start',
    },
  },
  question: {
    padding: '22px 48px 28px 32px',
    maxWidth: 375 - 38 - 32,
    width: '70%',
    background: '#8C9DD0',
    borderRadius: 4,
    alignSelf: 'flex-start',
    position: 'relative',
  },
  questionTriangle: {
    content: '',
    position: 'absolute',
    left: 0,
    bottom: -30,
    border: '16px solid transparent',
    borderLeft: '16px solid #8C9DD0',
    borderTop: '16px solid #8C9DD0',
  },
  questionText: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.02em',
    color: '#FFFFFF',
  },
  answer: {
    marginTop: 17,
    padding: '22px 48px 28px 32px',
    maxWidth: 375 - 38 - 32,
    width: '70%',
    background: '#FFDC00',
    borderRadius: 4,
    alignSelf: 'flex-end',
    position: 'relative',
  },
  answerTriangle: {
    content: '',
    position: 'absolute',
    right: 40,
    bottom: -30,
    border: '16px solid transparent',
    borderLeft: '16px solid #FFDC00',
    borderTop: '16px solid #FFDC00',
  },
  answerText: {
    fontFamily: 'PT Sans',
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.02em',
    color: '#3E245C',
  },
  bird: {
    marginTop: 70,
  },
  moreQuestions: {
    marginTop: -10,
    maxWidth: 1440,
    width: '63%',
    minWidth: 300,
    margin: '0 auto',
    marginBottom: 143,
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    height: 200,
  },
  moreQuestionsImage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
  },
  link: {
    display: 'flex',
    marginTop: 10,
    textDecoration: 'none',
    alignItems: 'center',
    zIndex: 1300,
  },
  linkText: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: '0.02em',
    color: '#3E245C',
    marginRight: 13,
  },
  moreQuestionsTitle: {
    fontFamily: 'PT Sans',
    fontSize: 20,
    letterSpacing: '0.02em',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
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
  questionImageGroup: {
    width: '100%',
    marginBottom: 30,
    position: 'relative',
    minHeight: 30,
    marginTop: 137,
  },
});

const HomePage = () => {
  const classes = useStyles();
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <img src={headerBG} alt="header-bg" className={classes.headerBG} />
        <h6 className={classes.title}>Surveys</h6>
        <p className={classes.description}>Simple. Powerfull. On Time.</p>
        <button className={classes.startBtn}>Start the Survey</button>
      </header>
      <main>
        <Grid container justify="center" className={classes.benefits}>
          <Grid
            item
            lg={4}
            md={6}
            sm={12}
            xs={12}
            className={classes.benefitGridItem}>
            <Benefit
              title="Time saving"
              img={<img alt="duck" src={duck} className={classes.duck} />}>
              24-72 hours from study activation to report
            </Benefit>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            sm={12}
            xs={12}
            className={classes.benefitGridItem}>
            <Benefit
              title="Cost Effective​"
              img={<img alt="sun" src={sun} className={classes.sun} />}>
              Starting from $1 per voice of respondent.
            </Benefit>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            sm={12}
            xs={12}
            className={classes.benefitGridItem}>
            <Benefit
              title="Global Reach"
              img={<img alt="round" src={round} className={classes.round} />}>
              Opening new vistas for our Clients by looking at new markets,
              searching new customers, understanding different audiences
              worldwide.
            </Benefit>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            sm={12}
            xs={12}
            className={classes.benefitGridItem}>
            <Benefit
              title="From Complexity to Clarity"
              img={<img alt="sluck" src={sluck} className={classes.sluck} />}>
              Wise structure of forms and reports paired with user-friendly UI
              provide smart and simple answers on complex questions.
            </Benefit>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            sm={12}
            xs={12}
            className={classes.benefitGridItem}>
            <Benefit
              title="Reliability & Data Quality"
              img={
                <img
                  alt="triangle"
                  src={triangle}
                  className={classes.triangle}
                />
              }>
              Our reports maintain “certified” status, as they are built on
              world-class methods in data collection and analysis by industry
              best research specialists.
            </Benefit>
          </Grid>
        </Grid>
        <div className={classes.plates}>
          <YellowPlate />
          <BluePlate />
          <PurplePlate />
        </div>
        <div className={classes.questions}>
          <Hidden xsDown>
            <div className={classes.questionImageGroup}>
              <QuestionsImage />
              <ThinkImage />
              <img
                alt="broken-line"
                src={smallBrokenLine}
                className={classes.smallBrokenLine}
              />
              <img
                alt="broken-line-blue"
                src={smallBrokenLineBlue}
                className={classes.smallBrokenLineBlue}
              />
            </div>
          </Hidden>
          <div className={classes.questionCards}>
            <div className={classes.card}>
              <div className={classes.question}>
                <div className={classes.questionTriangle}></div>
                <p className={classes.questionText}>
                  Some common question about service number one?
                </p>
              </div>
              <div className={classes.answer}>
                <div className={classes.answerTriangle}></div>
                <p className={classes.answerText}>
                  Yes. Answer in some words and comment about answer. Answer in
                  some words and comment about answer.
                </p>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.question}>
                <div className={classes.questionTriangle}></div>
                <p className={classes.questionText}>
                  Some common question about service number one?
                </p>
              </div>
              <div className={classes.answer}>
                <div className={classes.answerTriangle}></div>
                <p className={classes.answerText}>
                  Yes. Answer in some words and comment about answer. Answer in
                  some words and comment about answer.
                </p>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.question}>
                <div className={classes.questionTriangle}></div>
                <p className={classes.questionText}>
                  Some common question about service number one?
                </p>
              </div>
              <div className={classes.answer}>
                <div className={classes.answerTriangle}></div>
                <p className={classes.answerText}>
                  Yes. Answer in some words and comment about answer. Answer in
                  some words and comment about answer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.moreQuestions}>
          <div className={classes.moreQuestionsImage}>
            <img alt="bird" src={bird} className={classes.bird} />
            <img
              alt="broken-line"
              src={brokenLine}
              className={classes.brokenLine}
            />
            <img
              alt="broken-line-blue"
              src={brokenLineBlue}
              className={classes.brokenLineBlue}
            />
          </div>
          <div className={classes.textWrapper}>
            <p className={classes.moreQuestionsTitle}>Have more questions?</p>
            <Link to="/" className={classes.link}>
              <p className={classes.linkText}>We have answers in FAQ</p>
              <img
                className={classes.linkImg}
                alt="arrow-right"
                src={arrowRight}
              />
            </Link>
          </div>
        </div>
        <Carousel />
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
      </main>
    </div>
  );
};

export default HomePage;
