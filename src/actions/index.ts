import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types'

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  // instead returning an action, we'll return a function because we're using redux-thunk
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
        type: ActionTypes.fetchTodos,
        payload: response.data
    })
  };
};
