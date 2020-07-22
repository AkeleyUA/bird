import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './pages/homePage';
import ProductsPage from './pages/productsPage';
import PricingPage from './pages/pricingPage';

const PagesWithRoutes = () => (
  <>
    <Route path="/" exact component={HomePage} />
    <Route path="/products" exact component={ProductsPage} />
    <Route path="/pricing" exact component={PricingPage} />
  </>
);
export default PagesWithRoutes;
