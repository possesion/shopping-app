import React from 'react'
import Todo from '../features/todos/Todo';
import { loadState, saveState } from './loadState.js'
import { configureStore } from '@reduxjs/toolkit';
import _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/app.scss'
import rootReducer from '../features/todos/todosSlice';
const persistState = loadState();
console.log(loadState())
export const store = configureStore({ reducer: rootReducer, preloadedState: persistState });

store.subscribe(_.throttle(() => {
  saveState(store.getState())
}, 1000))
// console.log(store.getState())
const App = () => (
  <div data-testid="app" className="mt-md-5">
    <Todo />
  </div>
);

export default App;
