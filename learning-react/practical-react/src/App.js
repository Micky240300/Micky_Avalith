import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';

import { todos } from './todos.json';

const App = () => {

  const [title, setTitle] = useState('default title')
  let [numArea, setNumArea] = useState(0)

  return (
    <div className="App">
      <Navigation title="Menu"/>
      <Navigation title="OMG"/> 
      {title} - {numArea}

      <button onClick={() => setTitle('pepe')}>set title</button>
      <button onClick={() => setNumArea(numArea+1)}>set num</button>
    </div>
  );
}

export default App;
