import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries/Countries';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  const titleStyle = {
    color: "#555",
    textAlign: "center",
    textTransform: "capitalize",

  }
  return (
    <Router>
      <Switch>
        <Route exact path="/country/:countryName">
          <CountryDetails />
        </Route>
        <Route exact path="/">
          <Countries />
        </Route>
        <Route path="*">
          <div style={titleStyle}>
            <h1>Page not found!</h1>
            <h1>404</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
