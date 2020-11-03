import React from 'react';
import { render } from 'react-dom';
import TodoList from '../src/features/todos/TodoList';

test('todoList', () => {
    render(<TodoList/>)
})
