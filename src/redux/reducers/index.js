import { combineReducers } from 'redux';

import portfolio from './portfolio';
import work from './work';

const rootReducer = combineReducers({
  portfolio,
  work
});

export default rootReducer;
