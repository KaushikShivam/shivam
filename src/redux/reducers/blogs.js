import blogs from './../../data/blogs';

const INITIAL_STATE = {
  blogs
};

const blogsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default blogsReducer;
