import { combineReducers } from 'redux';

import portfolio from './portfolio';
import work from './work';
import education from './education';
import certifications from './certifications';

const rootReducer = combineReducers({
  portfolio,
  work,
  education,
  certifications
});

export default rootReducer;
