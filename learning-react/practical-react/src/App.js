import React, {useState} from 'react';
import './App.css';
import Navigation from './components/Navigation';

import { todos } from './todos.json';
console.log(todos);

class App extends Component {
render() {




  return (
    <div className="App">
      <Navigation title="Menu"/>
      <Navigation title="OMG"/> 
      

      
    </div>
    );
  }
}

export default App;
