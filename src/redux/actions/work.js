import { GET_WORK, SET_WORK } from './types';
import works from '../../data/works';

const setWork = () => dispatch => {
  dispatch({
    type: SET_WORK,
    payload: works
  });
};
