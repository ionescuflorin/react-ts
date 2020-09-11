import {FetchTodosAction, DeleteTodoAction} from './todos'

export enum ActionTypes {
    fetchTodos,
    deleteTodo
}

// type alias = using union types
export type Action =  FetchTodosAction | DeleteTodoAction