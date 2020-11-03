import { createSlice, combineReducers } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
    allIds: [],
    byId: {},
    currentNameFilter: 'all',
};

const tasks = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: {
            reducer: (state, { payload }) => {
                // console.log(task); // надо передать {payload: {task}}
                return {
                    byId: { ...state.byId, [payload.id]: payload },
                    allIds: [payload.id, ...state.allIds],
                    currentNameFilter: state.currentNameFilter,
                }
            },
            prepare: (text) => {
                const id = _.uniqueId();
                return { payload: { id, text, state: 'active' } }
            }
        },
        deleteTask: (state, { payload: { id } }) => {
            const filterAllIds = state.allIds.filter(item => item !== id);
            const getRidofTask = _.omit(state.byId, id);
            state.byId = getRidofTask;
            state.allIds = filterAllIds;
        },
        toggleTask: (state, { payload: { id } }) => {
            const complete = state.byId[id].state;
            state.byId[id].state = complete === 'active' ? 'finished' : 'active';
        },
        toggleFilter: (state, { payload }) => { // изменить поле currentNameFilter
            state.currentNameFilter = payload;
        }
    }
});

const text = createSlice({
    name: 'text',
    initialState: '',
    reducers: {
        updateText: (state, action) => {
            return action.payload;
        }
    },
    extraReducers: {
        [tasks.actions.addTask]: (state) => {
            return '';
        }
    }
});

export const { addTask, deleteTask, toggleTask, toggleFilter } = tasks.actions;
export const { updateText } = text.actions;
// export const { toggleFilter } = currentNameFilter.actions;

export default combineReducers({
    tasks: tasks.reducer,
    text: text.reducer,
});

