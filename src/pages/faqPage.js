import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid} from '@material-ui/core';
import clsx from 'clsx';
import SearchIcon from '@material-ui/icons/Search';
import Invitation from '../components/invitation';
import {useLocation} from 'react-router-dom';

const data = [
  [
    {
      title: 'A Guide to Designing Your Survey',
      description:
        "Use this guide to learn the basics of building a survey. If you're having trouble finding a specific feature, use the search bar above to find an answer in our Help Center.",
    },
  ],
  [
    {
      title: 'How to Create a Survey',
      description: `Click Create Survey in the upper-right corner of your account and choose one of the options: Start from scratch, copy an existing survey, search surveys and templates, or use built it for me.`,
    },
    {
      title: 'Adding & Editing Questions',
      description:
        'Add new questions to your survey from the BUILDER, QUESTION BANK, or by clicking +New Question on the Design Survey page. When you add a new question, an editing view appears where you can enter your question text and customize the question. All question types, including Text and Image, count towards the 10-question limit of the Free plan.',
    },
    {
      title: 'A Guide to Designing Your Survey',
      description:
        "Use this guide to learn the basics of building a survey. If you're having trouble finding a specific feature, use the search bar above to find an answer in our Help Center.",
    },
    {
      title: 'Previewing & Testing Surveys',
      description:
        'Go to the Preview & Score section to make sure the flow and settings are working as expected. You may also want to create a collector to try out the entire survey experience as a respondent would.',
    },
  ],
  [
    {
      title: 'How to Create a Survey',
      description: `Click Create Survey in the upper-right corner of your account and choose one of the options: Start from scratch, copy an existing survey, search surveys and templates, or use built it for me.`,
    },
  ],
  [
    {
      title: 'A Guide to Designing Your Survey',
      description:
        "Use this guide to learn the basics of building a survey. If you're having trouble finding a specific feature, use the search bar above to find an answer in our Help Center.",
    },
    {
      title: 'Previewing & Testing Surveys',
      description:
        'Go to the Preview & Score section to make sure the flow and settings are working as expected. You may also want to create a collector to try out the entire survey experience as a respondent would.',
    },
  ],
  [
    {
      title: 'How to Create a Survey',
      description: `Click Create Survey in the upper-right corner of your account and choose one of the options: Start from scratch, copy an existing survey, search surveys and templates, or use built it for me.`,
    },
  ],
];

const useStyles = makeStyles({
  container: {
    minHeight: 1400,
  },
  pageTitle: {
    fontFamily: 'Duster Regular',
    fontSize: 72,
    color: '#3E245C',
    marginTop: 92,
    marginBottom: 46,
  },
  subTitle: {
    fontFamily: 'PT Sans',
    fontSize: 24,
    color: '#3E245C',
    fontWeight: 'bold',
  },
  listItem: {
    fontFamily: 'PT Sans',
    fontSize: 20,
    color: '#3E245C',
    fontWeight: 'bold',
  },
  listItemTitle: {
    fontFamily: 'Duster Regular',
    fontSize: 32,
    color: '#3E245C',
    margin: '10px 0 15px 0',
  },
  listItemDescription: {
    fontFamily: 'PT Sans',
    fontSize: 20,
    color: '#2E333D',
    letterSpacing: '0.02em',
    marginBottom: 40,
  },
  search: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#3E245C',
    letterSpacing: '0.02em',
  },
  greyBG: {
    minHeight: 91,
    width: '100%',
    background: '#F7F7F7',
    borderRadius: 8,
    padding: '22px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 8,
    cursor: 'pointer',
  },
  yellowBG: {
    minHeight: 91,
    width: '100%',
    background: '#FFDC00',
    borderRadius: 8,
    padding: '22px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 8,
    cursor: 'pointer',
  },
  articles: {
    marginBottom: 26,
    marginLeft: 10,
  },
  searchBlock: {
    borderBottom: '2px solid #8C9DD0',
  },
  searchInput: {
    padding: '5px 0',
  },
  searchIcon: {color: '#8C9DD0'},
});

const FAQPage = () => {
  const classes = useStyles();
  const [currentItem, setCurrentItem] = useState(2);
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const changeHandler = ({currentTarget: {id}}) => {
    setCurrentItem(+id);
  };

  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item lg={10}>
        <h1 className={classes.pageTitle}>FAQ</h1>
      </Grid>
      <Grid item container lg={10}>
        <Grid item lg={5}>
          <p className={clsx(classes.subTitle, classes.articles)}>Articles</p>
        </Grid>
        <Grid item container lg={7} alignItems="center">
          <Grid item container lg={1} justify="flex-end">
            <Grid item lg={6} container alignItems="center">
              <SearchIcon className={classes.searchIcon} />
            </Grid>
          </Grid>
          <Grid item className={classes.searchBlock}>
            <input
              className={clsx(classes.search, classes.searchInput)}
              placeholder="Search"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container lg={4} style={{maxHeight: 500}}>
        {[
          'Translating Business Objectives into Research Objectives',
          'How to Start the Survey',
          'Survey Design',
          'Audience Selection & Targeting',
          'Reading the Survey Results',
        ].map((text, index) => (
          <Grid
            item
            lg={11}
            id={`${index + 1}`}
            onClick={changeHandler}
            className={
              currentItem === index + 1 ? classes.yellowBG : classes.greyBG
            }
            key={index}>
            <p className={classes.listItem}>{text}</p>
          </Grid>
        ))}
      </Grid>
      <Grid item container lg={6} alignItems="flex-start">
        {data[currentItem - 1].map(({title, description}, index) => (
          <Grid item lg={10} key={index} className={classes.item}>
            <h6 className={classes.listItemTitle}>{title}</h6>
            <p className={classes.listItemDescription}>{description}</p>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={10}>
        <Invitation />
      </Grid>
    </Grid>
  );
};

export default FAQPage;
