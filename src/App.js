import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NoMatch from './Components/NoMatch';
import Home from './Components/Home';
import BeerList from './Components/BeerList';
import BeerItem from './Components/BeerItem';
import BeerDetails from './Components/BeerDetails';

function App(props) {
  return (
    <Router>
      {props.children}
      <div className="App">

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/all" exact>
            <BeerList/>
          </Route>
          <Route path="/all/:id" component={BeerDetails}>
          </Route>
          
          <Route path="/random">
            <BeerItem/>
          </Route>
         
          <Route path="">
            <Home />
          </Route>
          <Route>
            <NoMatch />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
