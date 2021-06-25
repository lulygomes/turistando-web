import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Welcome from '../pages/Welcome';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  
    <Switch>
      <Route path='/' exact component={Welcome}  />
      <Route path='/home' exact component={Home}  />
    </Switch>

)

export default Routes;