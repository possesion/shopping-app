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
        <div className="mt-5 d-flex justify-content-around">
            {filter.map(([state, filter]) => (
                <React.Fragment key={state}>
                    {<button
                        onClick={filterList(state)}
                        className="card-btn">
                        <h5 style={{
                            transform: state === activeFilter ?
                                `scale(1.2)` :
                                `scale(1)`
                        }}>{filter}</h5>
                    </button>}
                </React.Fragment>
            ))}
        </div>
    )
};

export default TodoFilter;
