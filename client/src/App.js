import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './Components/Navigation/Navigation';
import HomePage from './Pages/HomePage';
import SavedPage from './Pages/SavedPage';
import SearchPage from './Pages/SearchPage';
import AppDescription from './Components/AppDescription/AppDescription';
import './App.css';
function App() {
  return (
<Router>
  <Navigation />
  <AppDescription />
  <Switch>
    <Route exact path="/">
      <SearchPage />
    </Route>
    <Route path="/saved">
      <SavedPage />
    </Route>
    <Route path="/search">
      <SearchPage />
    </Route>
  </Switch>
</Router>
);
}

export default App;