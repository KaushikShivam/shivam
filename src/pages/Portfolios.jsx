import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
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
    if (filter === 'Top') {
      setPortfolioData(portfolios);
    } else {
      const filteredData = portfolios.filter(item => item.category === filter);
      setPortfolioData(filteredData);
    }
  };

  return (
    <main className="Portfolios container padding-nav">
      <Header
        title="Portfolio"
        subtitle="Beautiful Apps That Scale"
        image="https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      />
      <PortfolioFilter handleFilter={handleFilter} />
      <div style={{ clear: 'both' }} className="row">
        {portfolioData.map(portfolio => (
          <PortfolioItem portfolio={portfolio} />
        ))}
      </div>
    </main>
  );
};

const mapStateToProps = state => ({
  portfolios: state.portfolio.portfolios
});

export default connect(mapStateToProps, { getPortfolios })(Portfolios);
