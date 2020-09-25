import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from '../todos/todosSlice';

const filter = [['all', 'All list'], ['active', 'Need to buy'], ['finished', 'Done']]
const TodoFilter = () => {
    const activeFilter = useSelector(state => state.tasks.currentNameFilter);
    const dispatch = useDispatch();
    const filterList = (state) => (e) => {
        e.preventDefault();
        dispatch(toggleFilter(state));
    }
    return (
        <div className="mt-5 d-flex flex-column flex-md-row justify-content-around">
            {filter.map(([state, filter]) => (
                <React.Fragment key={state}>
                    {activeFilter === state ? <h5 className="text-center"><u>{filter}</u></h5>
                        : <button
                            onClick={filterList(state)}
                            className="btn btn-link border-0 p-0">
                            <h5>{filter}</h5>
                        </button>}
                </React.Fragment>
            ))}
        </div>
    )
};

export default TodoFilter;
