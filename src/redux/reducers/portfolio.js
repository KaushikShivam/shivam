import { GET_PORTFOLIOS } from './../actions/types';

const initialState = {
  portfolios: []
};

const portfolioReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PORTFOLIOS:
      return { ...state, portfolios: payload };

    default:
      return state;
  }
};

export default portfolioReducer;
