import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from './TodoList';
import '../../assets/todo.scss';
import TodoFilter from '../filter/TodoFilter';
import { updateText, addTask } from './todosSlice';

const Todo = () => {
  const text = useSelector((state) => state.text);
  const dispatch = useDispatch();
  const handleClick = (task) => (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    // console.log(local);
  };

  const handleChange = (e) => {
    dispatch(updateText(e.target.value));
  };
  return (
    <div className='container'>
      <div className='row d-flex position'>
        <div className='card card-size m-auto' style={{ width: '100%' }}>
          <div className='card-body card-background'>
            <div className='card-title text-center'>
              <h2>Your personal shopping list</h2>
              <TodoFilter />
            </div>
            <TodoList />
            <form className='input-group mb-3' onSubmit={handleClick(text)}>
              <input
                type='text'
                data-testid='input'
                className='form-control'
                value={text}
                onChange={handleChange}
                required
                placeholder='Input the value...'
                aria-label="Recipient's username"
                aria-describedby='basic-addon2'
              />
              <div className='input-group-append'>
                <button className='btn btn-outline-primary' type='submit'>
                  add to list
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
