import React from 'react';
import Header from './../layout/Header';

import PortfolioFilter from './../components/PortfolioFilter';
import PortfolioItem from './../components/PortfolioItem';

const Portfolios = () => {
  return (
    <main className="Portfolios container padding-nav">
      <Header
        title="Portfolio"
        subtitle="Beautiful Apps That Scale"
        image="http://www.jubair.info/images/1.jpg"
      />
      <PortfolioFilter />
      <div style={{ clear: 'both' }} className="row">
        {this.state.portfolios.map(portfolio => (
          <PortfolioItem key={portfolio.name} {...portfolio} />
        ))}
      </div>
    </main>
  );
};

export default Portfolios;
