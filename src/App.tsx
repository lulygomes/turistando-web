import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Hooks from './src/hooks';
import Routes from './src/routes'

import GlobalStyle from './src/styles/global';


function App() {
  return (
    <Router >
      <Hooks>
        <Routes />
      </Hooks>
      <GlobalStyle />
    </Router>
  );
}

export default App;
