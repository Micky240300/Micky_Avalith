import React from 'react';
import './App.css';

import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container">
        <Dashboard></Dashboard>
        </div>
    </div>
  );
}

export default App;
