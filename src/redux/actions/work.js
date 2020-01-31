import { GET_WORK } from './types';
import works from '../../data/works';

export const getWork = () => dispatch => {
  dispatch({
    type: GET_WORK,
    payload: works
  });
};
