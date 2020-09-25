// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     filter: 'SHOW_ALL',
// }
// const activeFilter = createSlice({
//     name: 'filter',
//     initialState: initialState.filter,
//     reducers: {
//         filterTasks: (state, { payload: { state } }) => {
//             return activeFilter === 'all' ? filter : <button onClick={filterList(state)}>{filter}</button>
//             return state.todos.map(item => item.state === payload);
//         },
//     }
// });

// export const { filterTasks } = activeFilter.actions;
// export default activeFilter.reducer;