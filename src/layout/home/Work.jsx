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
                VIEW ALL
              </Link>
            </div>
            <p className="content-detail">
              My portfolio contains projects built with technologies ranging
              from Web design landing pages to fully fleged full-stack
              applications using the MERN stack, Firebase and Ruby on Rails.
              <Link to="/portfolios">Click Here</Link> to view all of of the
              projects in their glory.
            </p>
          </div>
          <div className="col-12">
            <div className="row mt-5">
              {topPortfolios.map(portfolio => (
                <PortfolioItem key={portfolio.name} portfolio={portfolio} />
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
