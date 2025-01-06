export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo,
});

export const clearTodos = () => ({
    type: 'CLEAR_TODOS',
});
