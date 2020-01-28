import {
  GET_PORTFOLIOS,
  GET_TOP_PORTFOLIOS,
  GET_PORTFOLIO
} from './../actions/types';

const initialState = {
  portfolios: [],
  topPortfolios: [],
  portfolioItem: null
};

const portfolioReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PORTFOLIOS:
      return { ...state, portfolios: payload };
    case GET_TOP_PORTFOLIOS:
      return { ...state, topPortfolios: payload };
    case GET_PORTFOLIO:
      return { ...state, portfolioItem: payload };
    default:
      return state;
  }
};

export default portfolioReducer;
