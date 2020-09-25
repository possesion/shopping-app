import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from './TodoList';
import TodoFilter from '../filter/TodoFilter';
import {
    updateText,
    addTask,
} from './todosSlice';

const Todo = () => {
    const text = useSelector(state => state.text);
    const dispatch = useDispatch();

    const handleClick = (task) => (e) => {
        e.preventDefault();
        dispatch(addTask(task));
    };

    const handleChange = (e) => {
        dispatch(updateText(e.target.value))
    };
    return (
        <div className="card m-auto" style={{ width: '26rem' }}>
            <div class="card-body">
                <h5 className="card-title text-center">Your personal shopping list</h5>
                <form className="input-group mb-3" onSubmit={handleClick(text)}>
                    <input type="text" className="form-control" value={text} onChange={handleChange} required placeholder="Input the value..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" type="submit">add to list</button>
                    </div>
                </form>
                <TodoList />
                <TodoFilter />
            </div>
        </div>

    )
};

export default Todo;