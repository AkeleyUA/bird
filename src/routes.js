import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import HomePage from './pages/homePage';
import ProductsPage from './pages/productsPage';
import PricingPage from './pages/pricingPage';
import HowItWorksPage from './pages/howItWorkPage';
import ProductsDescriptionPage from './pages/productsDescriptionPage';
import NewSurveyPage from './pages/newSurveyPage';

const PagesWithRoutes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/products" exact component={ProductsPage} />
    <Route path="/products/:id" exact component={ProductsDescriptionPage} />
    <Route path="/pricing" exact component={PricingPage} />
    <Route path="/how-it-works" exact component={HowItWorksPage} />
    <Route path="/new-survey" exact component={NewSurveyPage} />
    <Route
      path="/404"
      exact
      component={() => (
        <div>
          <h6
            style={{
              display: 'block',
              fontSize: 36,
              margin: '80px auto 80px auto',
              fontFamily: 'PT Sans',
              color: '#3E245C',
            }}>
            Загадка 1. Мы нажали на ссылку, но страницы нет? Угадайте, кто скоро
            останется без зарплаты? <br />
            Загадка 2. Мы написали свой url, но тут пусто? Как называют доктора,
            который вправляет руки?
          </h6>
        </div>
      )}
    />
    <Redirect from="*" to="/404" />
  </Switch>
);
export default PagesWithRoutes;
