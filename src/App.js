import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SnackbarProvider } from 'react-snackbar-alert';

import './App.css';

// Pages
import Homepage from './pages/Homepage';
import PortfolioDetail from './pages/PortfolioDetail';
import Contact from './pages/Contact';

// Components
import Navbar from './layout/Navbar';

const App = () => {
  return (
    <SnackbarProvider>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/portfolios/:id" component={PortfolioDetail} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </SnackbarProvider>
  );
};

export default App;
