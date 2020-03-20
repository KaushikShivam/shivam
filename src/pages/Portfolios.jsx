import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Flipper, Flipped } from 'react-flip-toolkit';

import Header from './../layout/Header';
import PortfolioFilter from './../components/PortfolioFilter';
import PortfolioItem from './../components/PortfolioItem';
import { getPortfolios } from './../redux/actions/portfolio';

const Portfolios = ({ portfolios, getPortfolios }) => {
  const [portfolioData, setPortfolioData] = useState(portfolios);

  useEffect(() => {
    getPortfolios();

    setPortfolioData(portfolios);
  }, [getPortfolios, portfolios]);

  const handleFilter = e => {
    // console.log(e.target.textContent);
    const filter = e.target.textContent;
    if (filter === 'All') {
      setPortfolioData(portfolios);
    } else {
      const filteredData = portfolios.filter(item => item.category === filter);
      setPortfolioData(filteredData);
    }
  };

  const flipKeyIds = portfolioData.map(el => el.rating).join('');

  return (
    <Flipper flipKey={flipKeyIds}>
      <main className="Portfolios container padding-nav">
        <Header
          title="Portfolio"
          subtitle="Beautiful Apps That Scale"
          image="http://www.jubair.info/images/1.jpg"
        />
        <PortfolioFilter handleFilter={handleFilter} />
        <div style={{ clear: 'both' }} className="row">
          {portfolioData.map(portfolio => (
            <Flipped key={portfolio.rating} flipId={portfolio.rating}>
              <PortfolioItem portfolio={portfolio} />
            </Flipped>
          ))}
        </div>
      </main>
    </Flipper>
  );
};

const mapStateToProps = state => ({
  portfolios: state.portfolio.portfolios
});

export default connect(mapStateToProps, { getPortfolios })(Portfolios);
