import { GET_EDUCATION } from './../actions/types';

const initialState = {
  educations: []
};

const educationReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_EDUCATION:
      return { ...state, educations: payload };
    default:
      return state;
  }
};

export default educationReducer;
