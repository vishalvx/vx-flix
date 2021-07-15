import React from 'react';
//hooks
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//components
import Home from './components/Home'


//styles
import { GlobalStyles } from './GlobalStyles';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Home/>
          <GlobalStyles/>
        </header>
      </div>
  );
}

export default App;
