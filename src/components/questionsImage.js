import React from 'react';
import {makeStyles} from '@material-ui/styles';
import questionShadow from '../images/question-shadow.svg';
import questionIcon from '../images/question.svg';
import yellowDotShadow from '../images/yellow-dot-shadow.svg';
import yellowDot from '../images/yellow-dot.svg';

const useStyles = makeStyles({
  questionShadow: {
    position: 'absolute',
    top: 15,
    left: 69,
    zIndex: 1,
  },
  questionIcon: {
    position: 'absolute',
    top: 20,
    left: 79,
    zIndex: 2,
  },
  yellowDotShadow: {
    position: 'absolute',
    top: 83,
    left: 114,
  },
  yellowDot: {
    position: 'absolute',
    top: 88,
    left: 122,
  },
});

const QuestionsImage = () => {
  const classes = useStyles();
  return (
    <>
      <img
        alt="question-shadow"
        src={questionShadow}
        className={classes.questionShadow}
      />
      <img
        alt="question-icon"
        src={questionIcon}
        className={classes.questionIcon}
      />
      <img
        alt="yellow-dot-shadow"
        src={yellowDotShadow}
        className={classes.yellowDotShadow}
      />
      <img alt="yellow-dot" src={yellowDot} className={classes.yellowDot} />
    </>
  );
};

export default QuestionsImage;
