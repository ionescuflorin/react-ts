import axios from 'axios';
import { Dispatch } from 'redux';

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  // instead returning an action, we'll return a function because we're using redux-thunk
  return async (dispatch: Dispatch) => {
    const response = await axios.get(url);

    dispatch({
        type: 'FETCH_TODOS',
        payload: response.data
    })
  };
};
