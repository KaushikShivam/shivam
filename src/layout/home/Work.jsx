import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getTopPortfolios } from './../../redux/actions/portfolio';

// import PortfolioItem from '../../components/PortfolioItem';

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
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros.
            </p>
          </div>
          <div className="col-12">
            <div className="row mt-5">
              {console.log(topPortfolios)}
              {/* {portfolios.map(portfolio => (
                // <PortfolioItem key={portfolio.name} {...portfolio} />
                <p>{portfolio.name}</p>
              ))} */}
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
