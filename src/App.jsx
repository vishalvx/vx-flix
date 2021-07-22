import React from 'react';
//hooks
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Home from './components/Home';
import NotFound from './components/NotFound';
import MovieDetail from './components/MovieDetail';

//styles
import { GlobalStyles } from './GlobalStyles';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/:movieId">
        <MovieDetail />
      </Route>
      <Route path="/*" >
        <NotFound />
      </Route>
    </Switch>
    <GlobalStyles />
  </Router>
);

export default App;
