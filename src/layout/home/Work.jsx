import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getTopPortfolios } from './../../redux/actions/portfolio';

import PortfolioItem from '../../components/PortfolioItem';

const Work = ({ topPortfolios, getTopPortfolios }) => {
  useEffect(() => {
    getTopPortfolios();
  }, [getTopPortfolios]);

  return (
    <section className="Work white-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="title-small">
                <span>Work</span>
              </h3>
              <Link className="font-weight-bold" to="/portfolios">
                VIEW ALL (88)
              </Link>
            </div>
            <p className="content-detail">
              Have a look at my projects in all its glory. They range from web
              design projects to fully fledged Full stack applications. You can
              also have a look at the rest of my projects by{' '}
              <Link className="bold" to="/portfolios">
                clicking here
              </Link>
              .
            </p>
          </div>
          <div className="col-12">
            <div className="row mt-5">
              {topPortfolios.map(portfolio => (
                <PortfolioItem key={portfolio.name} {...portfolio} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  topPortfolios: state.portfolio.topPortfolios
});

export default connect(mapStateToProps, { getTopPortfolios })(Work);
