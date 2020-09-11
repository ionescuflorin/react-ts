import { Todo, Action, ActionTypes } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action) => {
// action - here it wil be one of the 2 types
// here switch statement it will work like a type guard and it will be only one value
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return  state.filter((todo: Todo) => todo.id !== action.payload)
    default:
      return state;
  }
};
