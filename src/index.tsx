import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

interface AppState {
  counter: number;
}

// React.Component<Props, State>
class App extends React.Component<AppProps, AppState> {
  // this override the state definition in ts file
  // if we use this we can not define a state interface because it will not be used
  // state = { counter: 0 };

  // in ts world those two syntaxes are not equivalent
  // this not, an we get an error because in def it is readonly and we need to define an interface to work
  constructor(props: AppProps) {
    super(props);

    this.state = {counter: 0}
  }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };
  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App color="red" />, document.getElementById('root'));
