import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from './../layout/Header';
import PortfolioFilter from './../components/PortfolioFilter';
import PortfolioItem from './../components/PortfolioItem';
import { getPortfolios } from './../redux/actions/portfolio';

const Portfolios = ({ portfolios, getPortfolios }) => {
  useEffect(() => {
    getPortfolios();
  }, [getPortfolios]);

  return (
    <main className="Portfolios container padding-nav">
      <Header
        title="Portfolio"
        subtitle="Beautiful Apps That Scale"
        image="http://www.jubair.info/images/1.jpg"
      />
      <PortfolioFilter />
      <div style={{ clear: 'both' }} className="row">
        {portfolios.map(portfolio => (
          <PortfolioItem key={portfolio.rating} portfolio={portfolio} />
        ))}
      </div>
    </main>
  );
};

const mapStateToProps = state => ({
  portfolios: state.portfolio.portfolios
});

export default connect(mapStateToProps, { getPortfolios })(Portfolios);
