import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../src/routes/routes';

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
