import React from 'react';
import {makeStyles} from '@material-ui/styles';
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
import brokenLine from '../images/small-broken-line.svg';
import brokenLineBlue from '../images/small-broken-line-blue.svg';

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
  questions: {
    position: 'relative',
  },
  brokenLine: {
    position: 'absolute',
    left: 160,
    top: 27,
  },
  brokenLineBlue: {
    position: 'absolute',
    left: 207,
    top: 56,
  },
  questionCards: {
    paddingTop: 83,
    display: 'flex',
    justifyContent: 'space-around',
    transform: 'rotate(-5deg)',
  },
  card: {
    maxWidth: 375 + 50,
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    transform: 'rotate(5deg)',
  },
  question: {
    padding: '22px 48px 28px 32px',
    maxWidth: 375 - 38 - 32,
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
    background: '#FFDC00',
    borderRadius: 4,
    alignSelf: 'flex-end',
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
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <img src={headerBG} alt="header-bg" className={classes.headerBG} />
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
          <YellowPlate />
          <BluePlate />
          <PurplePlate />
        </div>
        <div className={classes.questions}>
          <QuestionsImage />
          <ThinkImage />
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
                <div className={classes.triangle}></div>
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
                <div className={classes.triangle}></div>
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
      </main>
    </div>
  );
};

export default HomePage;
