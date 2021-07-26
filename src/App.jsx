import React from 'react';
//hooks
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Home from './components/Home';
import NotFound from './components/NotFound';
import MovieDetail from './components/MovieDetail';
import WebShowHome from './components/WebShowHome';
import WebShowDetail from "./components/WebShowDetail";

//styles
import { GlobalStyles } from './GlobalStyles';

const App = () => (
  <Router>
    <Switch>
      
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/WebShowHome">
        <WebShowHome />
      </Route>
      <Route exact path="/:movieId">
        <MovieDetail />
      </Route>
      <Route exact path="/WebShowHome/:webId">
        <WebShowDetail />
      </Route>
      <Route path="/*">
        <NotFound />
      </Route>
    </Switch>
    <GlobalStyles />
  </Router>
);

export default App;
