import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ItemsCarousel from 'react-items-carousel';
import ProductCard from './productCard';
import {makeStyles} from '@material-ui/styles';
import soSmallBrokenLine from '../images/so-small-broken-line.svg';
import arrowRight from '../images/arrow-right.svg';
import {LeftContoler, RightContoler} from './carouselControlers';

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

const useStyles = makeStyles({
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
});

const noOfItems = productsArray.length;
const noOfCards = Math.floor(window.innerWidth / 350);
const autoPlayDelay = 3000;
const chevronWidth = 40;

const Carousel = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [isControled, setIsControled] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    let interval;
    if (isControled) {
      clearInterval(interval);
    } else {
      interval = setInterval(tick, autoPlayDelay);
    }
    return () => clearInterval(interval);
  }, [isControled]);

  const tick = () =>
    setActiveItemIndex(
      (prevState) => (prevState + 1) % (noOfItems - noOfCards + 1),
    );

  const onChange = (value) => setActiveItemIndex(value);

  const rightHandler = () => {
    setActiveItemIndex(
      (prevState) => (prevState + 1) % (noOfItems - noOfCards + 1),
    );
    setIsControled(true);
  };

  const leftHandler = () => {
    setActiveItemIndex((prevState) =>
      prevState > 0 ? (prevState - 1) % (noOfItems - noOfCards + 1) : 0,
    );
    setIsControled(true);
  };

  const blurHandler = () => {
    console.log(1);
    setIsControled(false);
  };

  return (
    <div className={classes.products} onMouseLeave={blurHandler}>
      <div className={classes.productsHeader}>
        <h6 className={classes.productsTitle}>Products</h6>
        <div className={classes.controlers}>
          <LeftContoler onClick={leftHandler} />
          <img
            alt="so-small-broken-line"
            src={soSmallBrokenLine}
            className={classes.soSmallBrokenLine}
          />
          <RightContoler onClick={rightHandler} />
        </div>
      </div>
      <div className={classes.divider} />
      <div className={classes.productCards}>
        <ItemsCarousel
          gutter={12}
          numberOfCards={noOfCards}
          activeItemIndex={activeItemIndex}
          requestToChangeActive={onChange}
          chevronWidth={chevronWidth}
          outsideChevron>
          {productsArray.map(({title, description, text, lineColors}) => (
            <ProductCard
              title={title}
              description={description}
              key={title}
              colors={lineColors}>
              {text}
            </ProductCard>
          ))}
        </ItemsCarousel>
      </div>
      <div className={classes.productFooter}>
        <Link to="/Products" className={classes.link}>
          <p className={classes.linkText}>Check out our Products</p>
          <img alt="arrow-right" src={arrowRight} />
        </Link>
      </div>
    </div>
  );
};

export default Carousel;
