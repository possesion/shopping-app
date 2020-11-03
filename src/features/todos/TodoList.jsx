import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from './todosSlice';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import _ from 'lodash'
import '../../assets/todo-list.scss'

const TodoList = () => {
    const dispatch = useDispatch();
    const byId = useSelector(state => state.tasks.byId);
    const allIds = useSelector(state => state.tasks.allIds);
    const currentFilter = useSelector(state => state.tasks.currentNameFilter);
    const listRef = useRef();


    const handleToggle = (id) => (e) => {
        e.preventDefault();
        dispatch(toggleTask(id));
    };
    const handleDelete = (id) => () => {
        dispatch(deleteTask(id));
    };
    const filtered = currentFilter === 'all' ? allIds : allIds.filter(i => {
        return byId[i].state === currentFilter;
    });

    return (
        <div className="mt-3">
            <ul ref={listRef} className="list-group todo-list">
                <TransitionGroup className="todo-list">
                    {filtered.map((idx) => {
                        const { id, text, state } = byId[idx];
                        return (
                            <CSSTransition key={id}
                                timeout={500}
                                classNames="item"
                            >
                                <React.Fragment key={_.uniqueId(id)}>
                                    <li className="list-element d-flex" data-testid="elements">
                                        <span className="mr-auto">
                                            <button className="btn btn-link"
                                                data-testid="element"
                                                onClick={handleToggle({ id })}
                                                style={{
                                                    textDecoration: state === 'finished' ?
                                                        'line-through' :
                                                        'none'
                                                }}>
                                                <div className="text">
                                                    {text}
                                                </div>
                                            </button>
                                        </span>
                                        <button className="close"
                                            onClick={handleDelete({ id })}>
                                            <span>×</span>
                                        </button>
                                    </li>
                                </React.Fragment>
                            </CSSTransition>
                        )
                    })}

                </TransitionGroup>
            </ul>
        </div>
    )
};

export default TodoList;