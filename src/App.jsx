import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MovieList } from './components/MovieList';
import MovieDetail from './pages/MovieDetail';


//styles
import { GlobalStyles } from './components/GlobalStyles';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/moviedetail/:id" component={MovieDetail} />
            <Route path="/" component={MovieList} />
          </Switch>
          <GlobalStyles/>
        </header>
      </div>
    </Router>
  );
}

export default App;
