import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = ({ portfolio }) => {
  const { name, images, subtitle } = portfolio;
  return (
    <div className="PortfolioItem col-md-6 col-lg-4 col-xs-12">
      <div className="PortfolioItem__container">
        <img src={images[0]} alt="PortfolioItem Item" />
        <div className="PortfolioItem__overlay">
          <div className="details">
            <span className="title">{name}</span>
            <span className="info">{subtitle}</span>
          </div>
          <span className="PortfolioItem__btn--before"></span>
          <span className="PortfolioItem__btn--after"></span>
          <Link
            className="PortfolioItem__link"
            to={`/portfolios/${portfolio.rating}`}
          ></Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
