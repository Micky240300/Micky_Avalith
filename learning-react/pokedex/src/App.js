import React from 'react';
import './App.css';
import {HashRouter as Router} from 'react-router-dom';

import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";

import backgroundImage from './components/pokemon/pikachupicante.png';

function App() {
  return (
    <Router>
      <div className="App" style={{background: `url(${backgroundImage})`}}>
        <NavBar/>
        <div className="container">
          <Dashboard/>
        </div>
      </div>
    </Router>
  );
}

export default App;
