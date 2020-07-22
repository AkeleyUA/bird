import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import Banner from '../components/banner';
import {makeStyles} from '@material-ui/styles';
import mediumBrokenLine from '../images/medium-broken-line.svg';
import Categories from '../components/categories';
import ProductCard from '../components/productCard';

const useStyles = makeStyles({
  container: {
    padding: '32px 0',
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
    maxWidth: 1154,
    width: '80.1%',
    height: 213,
    background: '#FFDC00',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 67,
  },
  bigBannerTitle: {
    display: 'block',
    maxWidth: 330,
    width: '28.6%',
    fontFamily: 'Duster Regular',
    fontSize: 48,
    color: '#3E245C',
    marginLeft: '3.5%',
  },
  verticalDivider: {
    width: 1,
    height: 119,
    background: '#FFF',
    marginLeft: '5.8%',
  },
  bigBannerDescription: {
    maxWidth: 560,
    fontFamily: 'PT Sans',
    fontSize: 20,
    letterSpacing: '0.02em',
    color: '#3E245C',
    marginLeft: '2.7%',
    marginRight: '2.7%',
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
  main: {
    display: 'flex',
  },
  products: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: -15,
  },
  productWrapper: {
    margin: 15,
  },
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
      <div className={classes.bigBanner}>
        <h6 className={classes.bigBannerTitle}>Pruduct Solutions</h6>
        <div className={classes.verticalDivider} />
        <p className={classes.bigBannerDescription}>
          We did some job for you, creating redy to go survey templates
          depending on industry. So you just need to choose one. You may also
          update any template and save it for future tasks!
        </p>
      </div>
      <h6 className={classes.mainTitle}>Business Challenges</h6>
      <div className={classes.main}>
        <Categories />
        <div className={classes.products}>
          {productsArray.map(
            ({title, description, text, lineColors}, index) => (
              <div key={title + index} className={classes.productWrapper}>
                <ProductCard
                  title={title}
                  description={description}
                  btn
                  colors={lineColors}>
                  {text}
                </ProductCard>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
