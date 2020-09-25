import React from 'react'
import Todo from '../features/todos/Todo';
import { combineReducers } from '@reduxjs/toolkit';


const App = () => (
  <div className="mt-md-5">
    <Todo />
  </div>
);

export default App;
