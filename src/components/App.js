import './App.css';
import React from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './LandingPage';
import Footer from './Footer';



function App() {
  return (

    <Router>
      < Header /> 
      < LandingPage />
      < Footer />
   </Router>

  )
}

export default App