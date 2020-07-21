import React, {useState} from 'react';
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
import triangleToLeft from '../images/triangle-to-left.svg';
import soSmallBrokenLine from '../images/so-small-broken-line.svg';
import triangleToRight from '../images/triangle-to-right.svg';
import mediumBrokenLineBlue from '../images/medium-broken-line-blue.svg';
import Footer from '../components/footer';
import Carousel from '../components/carousel';

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
    paddingTop: 83,
    display: 'flex',
    justifyContent: 'space-around',
    transform: 'rotate(-5deg)',
    margin: '0 auto',
  },
  card: {
    maxWidth: 375 + 50,
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    transform: 'rotate(5deg)',
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
  birdWrapper: {
    width: '100%',
  },
  bird: {
    marginTop: 70,
    marginLeft: '19.2%',
  },
  moreQuestions: {
    marginTop: -10,
    marginLeft: '23%',
    marginBottom: 143,
    display: 'flex',
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
  brokenLinesWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 28,
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
  products: {
    width: '96%',
    margin: '0 auto',
  },
  productsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  controlers: {
    display: 'flex',
    alignItems: 'center',
  },
  productsTitle: {
    marginBottom: 16,
    fontFamily: 'Duster Regular',
    fontSize: 48,
    color: '#3E245C',
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: '#8C9DD0',
    marginBottom: 21,
  },
  productCards: {
    marginBottom: 45,
  },
  controler: {
    cursor: 'pointer',
  },
  productFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
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
});

const productsArray = [
  {
    title: 'Audience Portrait & Size',
    description: 'Product description',
    text: `Identify and monitor strategic targets size and profile for
    business planning, focused in-market, retail and communication
    strategies.`,
    line:
      'linear-gradient(90deg, #8C9DD0, #8C9DD0 33%, #FFDC00 33%, #FFDC00 66%, #53C8E1 66%, #53C8E1 100%',
  },
  {
    title: 'Audience Portrait & Size',
    description: 'Product description',
    text: `Identify and monitor strategic targets size and profile for
    business planning, focused in-market, retail and communication
    strategies.`,
    line: 'linear-gradient(90deg, #8C9DD0 50%, #3E245C 50%',
  },
  {
    title: 'Audience Portrait & Size',
    description: 'Product description',
    text: `Identify and monitor strategic targets size and profile for
    business planning, focused in-market, retail and communication
    strategies.`,
    line: 'linear-gradient(90deg, #8C9DD0 50%, #FFDC00 50%',
  },
  {
    title: 'Audience Portrait & Size',
    description: 'Product description',
    text: `Identify and monitor strategic targets size and profile for
    business planning, focused in-market, retail and communication
    strategies.`,
    line: 'linear-gradient(90deg, #8C9DD0 50%, #3E245C 50%',
  },
  {
    title: 'Audience Portrait & Size',
    description: 'Product description',
    text: `Identify and monitor strategic targets size and profile for
    business planning, focused in-market, retail and communication
    strategies.`,
    line:
      'linear-gradient(90deg, #8C9DD0, #8C9DD0 33%, #FFDC00 33%, #FFDC00 66%, #53C8E1 66%, #53C8E1',
  },
];

const HomePage = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const classes = useStyles();

  const leftHandler = () => {
    setActiveItemIndex((prevState) => (prevState === 0 ? 0 : prevState - 1));
  };

  const rightHandler = () => {
    console.log(activeItemIndex);
    setActiveItemIndex((prevState) =>
      prevState === productsArray.length - 4
        ? productsArray.length - 4
        : prevState + 1,
    );
  };

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
            src={smallBrokenLine}
            className={classes.smallBrokenLine}
          />
          <img
            alt="broken-line-blue"
            src={smallBrokenLineBlue}
            className={classes.smallBrokenLineBlue}
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
        <div className={classes.birdWrapper}>
          <img alt="bird" src={bird} className={classes.bird} />
        </div>
        <div className={classes.moreQuestions}>
          <div className={classes.brokenLinesWrapper}>
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
        <div className={classes.products}>
          <div className={classes.productsHeader}>
            <h6 className={classes.productsTitle}>Products</h6>
            <div className={classes.controlers}>
              <img
                alt="triangle-to-left"
                src={triangleToLeft}
                className={classes.controler}
                onClick={leftHandler}
              />
              <img
                alt="so-small-broken-line"
                src={soSmallBrokenLine}
                className={classes.soSmallBrokenLine}
              />
              <img
                alt="triangle-to-right"
                src={triangleToRight}
                className={classes.controler}
                onClick={rightHandler}
              />
            </div>
          </div>
          <div className={classes.divider} />
          <div className={classes.productCards}>
            <Carousel
              index={activeItemIndex}
              productsArray={productsArray}
              requestToChangeActive={setActiveItemIndex}
            />
          </div>
          <div className={classes.productFooter}>
            <Link to="/" className={classes.link}>
              <p className={classes.linkText}>Check out our Products</p>
              <img alt="arrow-right" src={arrowRight} />
            </Link>
          </div>
        </div>
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
      <Footer />
    </div>
  );
};

export default HomePage;
