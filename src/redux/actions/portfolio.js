import { GET_PORTFOLIOS, GET_PORTFOLIO, GET_TOP_PORTFOLIOS } from './types';
import portfolios from './../../data/portfolios';

export const getPortfolios = () => dispatch => {
  dispatch({
    type: GET_PORTFOLIOS,
    payload: portfolios
  });
};

export const getTopPortfolios = () => dispatch => {
  const sortedPortfolio = portfolios.sort((a, b) => b.rating - a.rating);
  dispatch({
    type: GET_TOP_PORTFOLIOS,
    payload: sortedPortfolio.slice(0, 6)
  });
};

export const getPortfolio = id => dispatch => {
  const portfolio = portfolios.find(p => p.rating === id);
  dispatch({
    type: GET_PORTFOLIO,
    payload: portfolio
  });
};
