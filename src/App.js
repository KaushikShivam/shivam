import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

// Pages
import Homepage from './pages/Homepage';

// Components
import Navbar from './layout/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
};

export default App;
