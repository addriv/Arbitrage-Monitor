import React from 'react';
import { Switch } from 'react-router-dom';

import HomeContainer from './home/home_container';
import NavContainer from './nav/nav_container';

const App = () => (
  <div>
    <NavContainer />
    <Switch>
      <HomeContainer path='/'/>
    </Switch>
  </div>
);

export default App;