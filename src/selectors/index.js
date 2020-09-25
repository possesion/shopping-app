import { useDispatch, useSelector } from 'react-redux';

// const getTasks = state => state.tasks;

export const tasksSelector = useSelector(state => {
    const { tasks: { byId, allIds } } = state;
    return allIds.map(i => byId[i]);
});
