import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import Banner from '../components/banner';
import {makeStyles} from '@material-ui/styles';
import mediumBrokenLine from '../images/medium-broken-line.svg';
import Categories from '../components/categories';
import ProductCard from '../components/productCard';
import {Grid, Hidden} from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    padding: '32px 0',
  },
  productsContainer: {
    width: '90%',
    margin: '0 auto',
  },
  bannerGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    position: 'relative',
    flexWrap: 'wrap',
  },
  mediumBrokenLine: {
    position: 'absolute',
    right: '12.4%',
    bottom: -10,
  },
  bigBanner: {
    width: '95%',
    maxWidth: 1154,
    minHeight: 213,
    background: '#FFDC00',
    margin: '0 auto',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 67,
    padding: '15px 0',
  },
  bigBannerTitle: {
    textAlign: 'center',
    fontFamily: 'Duster Regular',
    fontSize: 48,
    color: '#3E245C',
  },
  verticalDivider: {
    width: 1,
    height: 119,
    background: '#FFF',
  },
  horizontalDivider: {
    width: '50%',
    height: 1,
    background: '#FFF',
    margin: '15px 0',
  },
  bigBannerDescription: {
    maxWidth: 560,
    fontFamily: 'PT Sans',
    fontSize: 20,
    letterSpacing: '0.02em',
    color: '#3E245C',
  },
  mainTitle: {
    display: 'block',
    maxWidth: 1148,
    width: '80.1%',
    margin: '0 auto 30px auto',
    fontFamily: 'PT Sans',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  productWrapper: {},
});

const productsArray = [
  {
    title: 'Audience Portrait & Size',
    description: 'Product description',
    text: `Identify and monitor strategic targets size and profile for
    business planning, focused in-market, retail and communication
    strategies.`,
    lineColors: ['#8C9DD0', '#FFDC00', '#53C8E1'],
  },
  {
    title: 'Audience Portrait & Size',
    description: 'Product description',
    text: `Identify and monitor strategic targets size and profile for
    business planning, focused in-market, retail and communication
    strategies.`,
    lineColors: ['#8C9DD0', '#3E245C'],
  },
  {
    title: 'Audience Portrait & Size',
    description: 'Product description',
    text: `Identify and monitor strategic targets size and profile for
    business planning, focused in-market, retail and communication
    strategies.`,
    lineColors: ['#8C9DD0', '#FFDC00'],
  },
  {
    title: 'Audience Portrait & Size',
    description: 'Product description',
    text: `Identify and monitor strategic targets size and profile for
    business planning, focused in-market, retail and communication
    strategies.`,
    lineColors: ['#8C9DD0', '#3E245C'],
  },
  {
    title: 'Audience Portrait & Size',
    description: 'Product description',
    text: `Identify and monitor strategic targets size and profile for
    business planning, focused in-market, retail and communication
    strategies.`,
    lineColors: ['#8C9DD0', '#FFDC00', '#53C8E1'],
  },
  {
    title: 'Audience Portrait & Size',
    description: 'Product description',
    text: `Identify and monitor strategic targets size and profile for
    business planning, focused in-market, retail and communication
    strategies.`,
    lineColors: ['#8C9DD0', '#3E245C'],
  },
  {
    title: 'Audience Portrait & Size',
    description: 'Product description',
    text: `Identify and monitor strategic targets size and profile for
    business planning, focused in-market, retail and communication
    strategies.`,
    lineColors: ['#8C9DD0', '#FFDC00', '#53C8E1'],
  },
  {
    title: 'Audience Portrait & Size',
    description: 'Product description',
    text: `Identify and monitor strategic targets size and profile for
    business planning, focused in-market, retail and communication
    strategies.`,
    lineColors: ['#8C9DD0', '#3E245C'],
  },
  {
    title: 'Audience Portrait & Size',
    description: 'Product description',
    text: `Identify and monitor strategic targets size and profile for
    business planning, focused in-market, retail and communication
    strategies.`,
    lineColors: ['#8C9DD0', '#3E245C'],
  },
  {
    title: 'Audience Portrait & Size',
    description: 'Product description',
    text: `Identify and monitor strategic targets size and profile for
    business planning, focused in-market, retail and communication
    strategies.`,
    lineColors: ['#8C9DD0', '#3E245C'],
  },
];

const ProductsPage = () => {
  const classes = useStyles();
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={classes.container}>
      <div className={classes.bannerGroup}>
        <Banner title="From 24 to 72 hours">to get the result​</Banner>
        <Banner title="Downloadable report">
          with actionable business insight​
        </Banner>
        <Banner title="Benefits row">Slide and autoscroll if long</Banner>
        <img
          src={mediumBrokenLine}
          className={classes.mediumBrokenLine}
          alt="medium-broken-line"
        />
      </div>
      <Grid container className={classes.bigBanner} justify="center">
        <Grid item lg={4} md={4} sm={4} xs={11}>
          <h6 className={classes.bigBannerTitle}>Pruduct Solutions</h6>
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
        <Grid item lg={7} md={7} sm={7} xs={11}>
          <p className={classes.bigBannerDescription}>
            We did some job for you, creating redy to go survey templates
            depending on industry. So you just need to choose one. You may also
            update any template and save it for future tasks!
          </p>
        </Grid>
      </Grid>
      <h6 className={classes.mainTitle}>Business Challenges</h6>
      <Grid container className={classes.productsContainer}>
        <Grid item lg={3} xs={12}>
          <Categories />
        </Grid>
        <Grid item lg={9}>
          <Grid container spacing={3} justify="space-evenly">
            {productsArray.map(
              ({title, description, text, lineColors}, index) => (
                <Grid
                  item
                  lg={4}
                  key={title + index}
                  className={classes.productWrapper}>
                  <ProductCard
                    title={title}
                    description={description}
                    btn
                    colors={lineColors}>
                    {text}
                  </ProductCard>
                </Grid>
              ),
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductsPage;
