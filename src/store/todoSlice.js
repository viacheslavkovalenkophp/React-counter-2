import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
    },
});

export const { addTodo } = todoSlice.actions;

export const selectTodos = (state) => state.todos.todos;

export default todoSlice.reducer;
