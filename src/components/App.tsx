import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions/index';
import { StoreState } from '../reducers';
interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}
class _App extends Component<AppProps> {
  render() {
    return <div>Hi</div>;
  }
}

// const mapStateToProps = (state:StoreState): { todos: Todo[] } => {
//     return {
//         todos: state.todos
//     }
//}
const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return {
    todos,
  };
};

// dont use default in typescript
export const App = connect(mapStateToProps, { fetchTodos })(_App);
