import React from 'react';
import { render } from 'react-dom';
// import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import App from './components/App';
import { store } from './components/App'

// console.log(store);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)