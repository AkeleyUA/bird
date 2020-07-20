import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './pages/homePage';

const PagesWithRoutes = () => <Route path="/" exact component={HomePage} />;

export default PagesWithRoutes;
