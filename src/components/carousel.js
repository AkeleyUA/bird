import React, {useEffect, useState} from 'react';
import ItemsCarousel from 'react-items-carousel';
import ProductCard from './productCard';

const Carousel = ({index, productsArray, requestToChangeActive}) => {
  const [numberOfCards, setNumberOfCards] = useState(4);
  useEffect(() => {
    if (window.innerWidth < 575) {
      setNumberOfCards(1);
    } else if (window.innerWidth < 768) {
      setNumberOfCards(2);
    } else if (window.innerWidth < 992) {
      setNumberOfCards(3);
    } else {
      setNumberOfCards(4);
    }
  }, []);
  return (
    <ItemsCarousel
      activeItemIndex={index}
      numberOfCards={numberOfCards}
      gutter={20}
      requestToChangeActive={requestToChangeActive}>
      {productsArray.map(({title, description, text, line}) => (
        <ProductCard
          title={title}
          description={description}
          key={title}
          line={line}>
          {text}
        </ProductCard>
      ))}
    </ItemsCarousel>
  );
};

export default Carousel;
