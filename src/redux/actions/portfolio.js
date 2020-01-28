import { GET_PORTFOLIOS } from './types';
import portfolios from './../../data/portfolios';

export const getPortfolios = () => dispatch => {
  dispatch({
    type: GET_PORTFOLIOS,
    payload: portfolios
  });
};
