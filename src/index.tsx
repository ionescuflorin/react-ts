import React from 'react';
import ReactDOM from 'react-dom';
// reduxStuff
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// reducers
import { reducers } from './reducers/index';
// components
import App from './components/App';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
