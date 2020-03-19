import { combineReducers } from 'redux';

import portfolio from './portfolio';
import work from './work';
import education from './education';
import certifications from './certifications';
import blogs from './blogs';

const rootReducer = combineReducers({
  portfolio,
  work,
  education,
  certifications,
  blogs
});

export default rootReducer;
