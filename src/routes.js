import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import HomePage from './pages/homePage';
import ProductsPage from './pages/productsPage';
import PricingPage from './pages/pricingPage';
import HowItWorksPage from './pages/howItWorkPage';
import ProductsDescriptionPage from './pages/productsDescriptionPage';
import NewSurveyPage from './pages/newSurveyPage';
import AboutPage from './pages/aboutPage';
import FAQPage from './pages/faqPage';
import ContactsPage from './pages/contactsPage';
import MySurveysPage from './pages/dashboard/mySurveysPage';
import AppBar from './components/dashboardAppBar';
import SettingsMenu from './components/settingsMenu';
import CreditsPage from './pages/dashboard/creditsPage';
import BillingPage from './pages/dashboard/billingPage';
import InvoicesPage from './pages/dashboard/invoicesPage';

const SettingsPage = () => (
  <>
    <SettingsMenu>
      <Switch>
        <Route path="/my-office/settings/teams" exact />
        <Route path="/my-office/settings/change-plan" exact />
        <Route
          path="/my-office/settings/credits"
          exact
          component={CreditsPage}
        />
        <Route
          path="/my-office/settings/biling"
          exact
          component={BillingPage}
        />
        <Route
          path="/my-office/settings/invoices"
          exact
          component={InvoicesPage}
        />
        <Route path="/my-office/settings/offers" exact />
        <Route path="/my-office/settings/payment-method" exact />
        <Redirect
          exact
          from="/my-office/settings"
          to="/my-office/settings/teams"
        />
      </Switch>
    </SettingsMenu>
  </>
);

const Dashboard = () => (
  <>
    <AppBar />
    <Switch>
      <Route path="/my-office/dashboard" exact component={MySurveysPage} />
      <Route path="/my-office/settings" component={SettingsPage} />
      <Redirect exact from="/my-office" to="/my-office/dashboard" />
    </Switch>
  </>
);

const PagesWithRoutes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/products" exact component={ProductsPage} />
    <Route path="/products/:id" exact component={ProductsDescriptionPage} />
    <Route path="/pricing" exact component={PricingPage} />
    <Route path="/how-it-works" exact component={HowItWorksPage} />
    <Route path="/new-survey" exact component={NewSurveyPage} />
    <Route path="/about" exact component={AboutPage} />
    <Route path="/FAQ" exact component={FAQPage} />
    <Route path="/contacts" exact component={ContactsPage} />
    <Route path="/my-office" component={Dashboard} />
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
