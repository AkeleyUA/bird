import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './pages/homePage';
import ProductsPage from './pages/productsPage';
import PricingPage from './pages/pricingPage';
import HowItWorksPage from './pages/howItWorkPage';

const PagesWithRoutes = () => (
  <>
    <Route path="/" exact component={HomePage} />
    <Route path="/products" exact component={ProductsPage} />
    <Route path="/pricing" exact component={PricingPage} />
    <Route path="/how-it-works" exact component={HowItWorksPage} />
  </>
);
export default PagesWithRoutes;
