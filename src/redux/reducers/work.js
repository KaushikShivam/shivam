import { GET_WORK } from './../actions/types';

const initialState = {
  works: []
};

const workReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_WORK:
      return { ...state, works: payload };
    default:
      return state;
  }
};

export default workReducer;
