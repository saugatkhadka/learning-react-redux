import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import logger from 'react-logger';
// add thunk too 
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './js/store/index';
import App from './js/components/App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);