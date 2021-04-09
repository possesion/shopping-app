import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from './todosSlice';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import _ from 'lodash';
import '../../assets/todo-list.scss';

const TodoList = () => {
  const dispatch = useDispatch();
  const byId = useSelector((state) => state.tasks.byId);
  const allIds = useSelector((state) => state.tasks.allIds);
  const currentFilter = useSelector((state) => state.tasks.currentNameFilter);
  const listRef = useRef();

  const isDone = (taskState) => {
    const defaultClasses = [
      'd-flex', 'justify-content-between', 'my-2' , 'list-element'
    ];
   return taskState === 'finished'
      ? `alert-success ${defaultClasses.join(' ')}`
      : `alert-warning ${defaultClasses.join(' ')}`;
  };
  const handleToggle = (id) => {
    // e.preventDefault();
    if (id) dispatch(toggleTask(id));
  };
  const handleDelete = (id) => () => {
    dispatch(deleteTask(id));
  };
  const filtered =
    currentFilter === 'all'
      ? allIds
      : allIds.filter((i) => {
          return byId[i].state === currentFilter;
        });

  return (
    <div className='mt-3'>
      {/* <ul ref={listRef} className='list-group todo-list'> */}
        <TransitionGroup className='todo-list'>
          {filtered &&
            filtered.map((idx) => {
              const { id, text, state } = byId[idx];
              return (
                <CSSTransition key={id} timeout={500} classNames='item'>
                  <React.Fragment key={_.uniqueId(id)}>
                    <div className={isDone(state)} data-testid='listEl'>
                        <button
                          className='btn btn-link w-100'
                          type="button"
                          data-testid='element'
                          onClick={() => handleToggle({ id })}
                        >
                          <div className='text'>{text}</div>
                        </button>
                      <button
                        className='close'
                        data-testid='close'
                        onClick={handleDelete({ id })}
                      >
                        <span>×</span>
                      </button>
                    </div>
                  </React.Fragment>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      {/* </ul> */}
    </div>
  );
};

export default TodoList;
