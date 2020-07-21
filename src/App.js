import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import PagesWithRoutes from './routes';
import {BrowserRouter as Router} from 'react-router-dom';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <NavBar />
      <PagesWithRoutes />
      <Footer />
    </Router>
  );
}

export default App;
