import { GET_EDUCATION } from './types';
import education from '../../data/education';

export const getEducation = () => dispatch => {
  dispatch({
    type: GET_EDUCATION,
    payload: education
  });
};
