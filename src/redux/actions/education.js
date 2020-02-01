import { GET_EDUCATION } from './types';
import education from '../../data/education';

export const getWork = () => dispatch => {
  dispatch({
    type: GET_EDUCATION,
    payload: education
  });
};
