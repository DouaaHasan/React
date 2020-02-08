import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import WeatherApp from './components/WeatherApp';
import CityDetails from './components/pages/CityDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={WeatherApp} />
        <Route path='/:cityId' exact component={CityDetails} />
      </Switch>
    </Router>
  );
}
export default App;
