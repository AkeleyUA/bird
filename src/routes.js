import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './pages/homePage';
import ProductsPage from './pages/productsPage';

const PagesWithRoutes = () => (
  <>
    <Route path="/" exact component={HomePage} />
    <Route path="/Products" exact component={ProductsPage} />
  </>
);
export default PagesWithRoutes;
