import certifications from './../../data/certifications';

const INITIAL_STATE = {
  certifications
};

const certificationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default certificationsReducer;
