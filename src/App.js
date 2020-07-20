import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import PagesWithRoutes from './routes';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <PagesWithRoutes />
    </Router>
  );
}

export default App;
