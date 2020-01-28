import { GET_PORTFOLIOS, GET_TOP_PORTFOLIOS } from './../actions/types';

const initialState = {
  portfolios: [],
  topPortfolios: []
};

const portfolioReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PORTFOLIOS:
      return { ...state, portfolios: payload };
    case GET_TOP_PORTFOLIOS:
      return { ...state, topPortfolios: payload };

    default:
      return state;
  }
};

export default portfolioReducer;
