import { combineReducers } from 'redux';

import portfolio from './portfolio';
import work from './work';
import education from './education';

const rootReducer = combineReducers({
  portfolio,
  work,
  education
});

export default rootReducer;
