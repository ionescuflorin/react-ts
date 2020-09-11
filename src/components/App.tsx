import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions/index';
import { StoreState } from '../reducers';
interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}
class _App extends Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch todos</button>
        {this.renderList()}
      </div>
    );
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
