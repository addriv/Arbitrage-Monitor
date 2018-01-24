import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from './home/home_container';
import NavContainer from './nav/nav_container';
import KucoinContainer from './kucoin/kucoin_container';

const App = () => (
  <div>
    <NavContainer />
    <Switch>
      <Route path='/kucoin' component={KucoinContainer} />
      <Route path='/' component={HomeContainer} />
    </Switch>
  </div>
);

export default App;