import './App.css';
import React from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './LandingPage';


function App() {
  return (
    <Router>
      < Header /> 
      < LandingPage />
   </Router>
   
  )
}

export default App;
