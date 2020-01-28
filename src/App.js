import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

// Pages
import Homepage from './pages/Homepage';
import PortfolioDetail from './pages/PortfolioDetail';

// Components
import Navbar from './layout/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/portfolios/:id" component={PortfolioDetail} />
      </Switch>
    </div>
  );
};

export default App;
