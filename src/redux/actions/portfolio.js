import { GET_PORTFOLIOS, GET_TOP_PORTFOLIOS } from './types';
import portfolios from './../../data/portfolios';

export const getPortfolios = () => dispatch => {
  dispatch({
    type: GET_PORTFOLIOS,
    payload: portfolios
  });
};

export const getTopPortfolios = () => dispatch => {
  const sortedPortfolio = portfolios.sort((a, b) => a.rating < b.rating);
  console.log(sortedPortfolio);
  dispatch({
    type: GET_TOP_PORTFOLIOS,
    payload: portfolios
  });
};
