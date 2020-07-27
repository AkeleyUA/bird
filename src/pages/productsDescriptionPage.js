import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Breadcrumbs, Icon, Grid, Typography, Hidden} from '@material-ui/core';
import {Link, useLocation} from 'react-router-dom';
import bigCoin from '../images/big-coin.svg';
import ionMan from '../images/ion-man.svg';
import ionWoman from '../images/ion-woman.svg';
import pdfIcon from '../images/pdf-icon.svg';
import chart1 from '../images/chart-1.png';
import chart2 from '../images/chart-2.png';
import chart3 from '../images/chart-3.png';
import Invitation from '../components/invitation';

const useStyles = makeStyles({
  breadcrumbs: {
    margin: '63px auto 43px auto',
  },
  header: {
    marginBottom: 68,
  },
  link: {
    fontFamily: 'PT Sans',
    fontSize: 13,
    letterSpacing: '0.02em',
    color: '#3E245C',
    textDecoration: 'none',
  },
  separator: {
    color: '#8C9DD0',
  },
  pageTitle: {
    fontFamily: 'Duster Regular',
    fontSize: 72,
    color: '#3E245C',
    marginBottom: 40,
  },
  description: {
    fontFamily: 'PT Sans',
    fontSize: 20,
    letterSpacing: '0.02em',
    color: '#222222',
    marginBottom: 51,
  },
  startBtn: {
    background: '#FFDC00',
    borderRadius: 8,
    fontFamily: 'Duster Bold',
    fontSize: 26,
    textAlign: 'center',
    color: '#000000',
    maxWidth: 328,
    minWidth: 200,
    width: '100%',
    height: 56,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: 20,
  },
  like: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  likeIcon: {
    fontSize: 40,
    color: '#3E245C',
    cursor: 'pointer',
  },
  likeText: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#3E245C',
    marginLeft: 16,
    cursor: 'pointer',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  benefitsTitle: {
    fontFamily: 'Duster Regular',
    fontWeight: 'bold',
    fontSize: 48,
    color: '#3E245C',
    marginTop: 29,
  },
  benefits: {
    marginBottom: 122,
    background: '#F7F7F7',
    paddingBottom: 68,
  },
  benefit: {
    marginTop: 36,
    display: 'flex',
    alignItems: 'center',
  },
  benefitTitle: {
    fontFamily: 'Duster Regular',
    fontSize: 32,
    color: '#3E245C',
    maxWidth: 350,
    whiteSpace: 'pre-line',
  },
  benefitDescription: {
    fontFamily: 'PT Sans',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#222222',
  },
  actions: {
    marginTop: 31,
  },
  icons: {
    marginBottom: 9,
    display: 'flex',
    justifyContent: 'center',
  },
  dividerWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  verticalDivider: {
    height: 71,
    width: 1,
    background: '#8C9DD0',
  },
  actionTitle: {
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#000000',
    marginBottom: 4,
  },
  actionLink: {
    fontFamily: 'PT Sans',
    fontSize: 16,
    letterSpacing: '0.02em',
    textDecorationLine: 'underline',
    color: '#3E245C',
  },
  actionBtn: {
    width: 149,
    minHeight: 36,
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 13,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.02em',
    color: '#FFDC00',
    justifyContent: 'space-evenly',
    background: '#3E245C',
    borderRadius: 8,
  },
  yellowIcon: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFDC00',
    marginRight: 5,
  },
  flex: {
    display: 'flex',
  },
  textBlockTitle: {
    fontFamily: 'PT Sans',
    fontSize: 20,
    letterSpacing: '0.02em',
    color: '#3E245C',
  },
  results: {
    display: 'flex',
    marginTop: 130,
  },
  verticalDividerYellow: {
    height: 126,
    width: 1,
    background: '#FFDC00',
  },
  vericalCenterColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  resultsContainer: {
    marginTop: 44,
    marginBottom: 32,
  },
  resultTitile: {
    fontFamily: 'Duster Regular',
    fontSize: 32,
    color: '#3E245C',
  },
  resultDescription: {
    maxWidth: 442,
    fontFamily: 'PT Sans',
    fontSize: 16,
    letterSpacing: '0.02em',
    color: '#222222',
  },
});

const ProductsDescriptionPage = () => {
  const classes = useStyles();
  const [isLike, setIsLike] = useState(false);
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const likeHandler = () => {
    setIsLike((prevState) => !prevState);
  };
  return (
    <Grid container justify="center">
      <Grid item md={10} xs={11}>
        <Breadcrumbs
          className={classes.breadcrumbs}
          separator={
            <Icon className={classes.separator} size="small">
              arrow_right
            </Icon>
          }>
          <Link className={classes.link} to="/products">
            Product Sulotions
          </Link>
          <p className={classes.link}>Category</p>
        </Breadcrumbs>
      </Grid>
      <Grid item md={5} xs={11}>
        <h1 className={classes.pageTitle}>Business Challenge Product Test</h1>
      </Grid>
      <Grid item md={5} xs={11}>
        <Grid container className={classes.header} justify="center">
          <Grid item xs={12}>
            <p className={classes.description}>
              Learn about your consumers’ patterns and preferences. Ask your
              users how they prefer to consume content, how they choose content,
              what parental restrictions they use and more.
            </p>
          </Grid>
          <Grid item sm={7} xs={11} className={classes.center}>
            <button className={classes.startBtn}>Start the Survey</button>
          </Grid>
          <Grid item sm={5} xs={11} className={classes.like}>
            <Icon className={classes.likeIcon} onClick={likeHandler}>
              {isLike ? 'favorite' : 'favorite_border'}
            </Icon>
            <p className={classes.likeText} onClick={likeHandler}>
              Add to selected
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={11}>
        <Grid container className={classes.benefits} justify="center">
          <Grid
            item
            sm={10}
            xs={10}
            component={Typography}
            variant="h6"
            className={classes.benefitsTitle}>
            Benefits
          </Grid>
          <Grid item md={5} sm={10} xs={10} className={classes.benefit}>
            <Hidden only="xs">
              <img alt="big-coin" src={bigCoin} className={classes.coin} />
            </Hidden>
            <div className={classes.benefitTextBlock}>
              <h6 className={classes.benefitTitle}>Prioritize Investment</h6>
              <p className={classes.benefitDescription}>
                Text description about benefits for this kind of business
                challenge
              </p>
            </div>
          </Grid>
          <Grid item md={5} sm={10} xs={10} className={classes.benefit}>
            <Hidden only="xs">
              <img alt="big-coin" src={bigCoin} className={classes.coin} />
            </Hidden>
            <div className={classes.benefitTextBlock}>
              <h6 className={classes.benefitTitle}>Proven Methodology</h6>
              <p className={classes.benefitDescription}>
                Text description about benefits for this kind of business
                challenge
              </p>
            </div>
          </Grid>
          <Grid item md={5} sm={10} xs={10} className={classes.benefit}>
            <Hidden only="xs">
              <img alt="big-coin" src={bigCoin} className={classes.coin} />
            </Hidden>
            <div className={classes.benefitTextBlock}>
              <h6 className={classes.benefitTitle}>
                Strategic Recommendations
              </h6>
              <p className={classes.benefitDescription}>
                Text description about benefits for this kind of business
                challenge
              </p>
            </div>
          </Grid>
          <Grid item md={5} sm={10} xs={10} className={classes.benefit}>
            <Hidden only="xs">
              <img alt="big-coin" src={bigCoin} className={classes.coin} />
            </Hidden>
            <div className={classes.benefitTextBlock}>
              <h6 className={classes.benefitTitle}>Proven Methodology</h6>
              <p className={classes.benefitDescription}>
                Text description about benefits for this kind of business
                challenge
              </p>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={5} md={5} sm={10} xs={11}>
        <h6 className={classes.benefitsTitle}>Audience</h6>
        <p className={classes.benefitDescription}>
          Text about audience and countries where product can be explore. Text
          about audience and countries where product can be explore.
        </p>
        <Grid container className={classes.actions}>
          <Grid item sm={2} xs={3}>
            <div className={classes.icons}>
              <img src={ionMan} alt="man" />
              <img src={ionWoman} alt="woman" />
            </div>
            <p
              className={classes.benefitDescription}
              style={{textAlign: 'center'}}>
              Male & Female
            </p>
          </Grid>
          <Grid item xs={1} className={classes.dividerWrapper}>
            <div className={classes.verticalDivider} />
          </Grid>
          <Grid item sm={2} xs={3}>
            <h6 className={classes.actionTitle}>Age</h6>
            <p className={classes.benefitDescription}>16-50 years</p>
          </Grid>
          <Grid item xs={1} className={classes.dividerWrapper}>
            <div className={classes.verticalDivider} />
          </Grid>
          <Grid item sm={3} xs={3}>
            <h6 className={classes.actionTitle}>Region</h6>
            <Link to="/" className={classes.actionLink}>
              List of Countries
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={1} />
      <Grid item lg={4} md={4} sm={10} xs={11}>
        <h6 className={classes.benefitsTitle}>Questionnaire</h6>
        <p className={classes.benefitDescription}>
          Text about qustions list and what you can push button to check them
          all. And also you can add your own up to three questions to that list.
        </p>
        <Grid container className={classes.actions}>
          <Grid item sm={6} xs={7}>
            <button className={classes.actionBtn}>
              <Icon>format_list_numbered</Icon>Demo Survey
            </button>
          </Grid>
          <Grid item sm={6} xs={5} className={classes.flex}>
            <Icon className={classes.yellowIcon}>add</Icon>
            <div className={classes.textBlock}>
              <h6 className={classes.textBlockTitle}>3 custom questions</h6>
              <p className={classes.textBlockTitle}>for $100.00</p>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={10} xs={11} className={classes.results}>
        <Grid container>
          <Grid
            item
            component={Typography}
            variant="h6"
            className={classes.benefitsTitle}
            lg={1}
            md={2}
            sm={3}
            xs={12}>
            Results
          </Grid>
          <Grid item xs={1} className={classes.center}>
            <div className={classes.verticalDividerYellow} />
          </Grid>
          <Grid item md={9} sm={8} xs={11} style={{alignSelf: 'center'}}>
            <p
              className={classes.benefitDescription}
              style={{maxWidth: 418, marginBottom: 31}}>
              Text about benefits of result that client can get. Text about
              benefits of result that client can get.
            </p>
            <button className={classes.actionBtn} style={{width: 173}}>
              <img src={pdfIcon} alt="pdf-icon" />
              Download Sample
            </button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={8} xs={11}>
        <Grid
          container
          justify="center"
          spacing={4}
          className={classes.resultsContainer}>
          <Grid item sm={6} xs={12} className={classes.vericalCenterColumn}>
            <h6 className={classes.resultTitile}>Maximum Trial Potential</h6>
            <p className={classes.resultDescription}>
              Text with comments for this chart. Is this description for chart,
              or something else usefull.
            </p>
          </Grid>
          <Grid item sm={6} xs={12}>
            <img src={chart1} width="100%" alt="chart-1" />
          </Grid>
          <Hidden only="xs">
            <Grid item sm={6}>
              <img src={chart2} width="100%" alt="chart-2" />
            </Grid>
          </Hidden>
          <Grid item sm={6} className={classes.vericalCenterColumn}>
            <h6 className={classes.resultTitile}>Maximum Trial Potential</h6>
            <p className={classes.resultDescription}>
              Text with comments for this chart. Is this description for chart,
              or something else usefull.
            </p>
          </Grid>
          <Hidden smUp>
            <Grid item sm={6} xs={12}>
              <img src={chart2} width="100%" alt="chart-2" />
            </Grid>
          </Hidden>
          <Grid item sm={6} className={classes.vericalCenterColumn}>
            <h6 className={classes.resultTitile}>Maximum Trial Potential</h6>
            <p className={classes.resultDescription}>
              Text with comments for this chart. Is this description for chart,
              or something else usefull.
            </p>
          </Grid>
          <Grid item sm={6}>
            <img src={chart3} width="100%" alt="chart-3" />
          </Grid>
        </Grid>
      </Grid>
      <Invitation />
    </Grid>
  );
};

export default ProductsDescriptionPage;
