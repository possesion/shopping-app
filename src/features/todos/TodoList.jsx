import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from './todosSlice';

const TodoList = () => {
    const dispatch = useDispatch();
    const byId = useSelector(state => state.tasks.byId);
    const allIds = useSelector(state => state.tasks.allIds);
    const currentFilter = useSelector(state => state.tasks.currentNameFilter);
    const handleToggle = (id) => (e) => {
        e.preventDefault();
        dispatch(toggleTask(id));
    };
    const handleDelete = (id) => () => {
        dispatch(deleteTask(id));
    };
    const filtered = currentFilter === 'all' ? allIds : allIds.filter(i => byId[i].state === currentFilter);

    return (
        <div className="mt-3">
            <ul className="list-group">
                {filtered.length > 0 ?
                    filtered.map((idx) => {
                        const { id, text, state } = byId[idx];
                        return (
                            <React.Fragment key={id}>
                                <li className="list-group-item d-flex">
                                    <span className="mr-auto">
                                        <button className="btn btn-link" onClick={handleToggle({ id })} style={{ textDecoration: state === 'finished' ? 'line-through' : 'none' }}>
                                            {text}
                                        </button>
                                    </span>
                                    <button className="close" onClick={handleDelete({ id })}>
                                        <span>×</span>
                                    </button>
                                </li>
                            </React.Fragment>
                        )
                    }) :
                    <div className="ml-4">No elements found</div>}
            </ul>
        </div>
    )
};

export default TodoList;