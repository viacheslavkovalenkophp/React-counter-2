const initialState = {
    todos: [],
};

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case 'CLEAR_TODOS':
            return {
                ...state,
                todos: [],
            };
        default:
            return state;
    }
}

export default todoReducer;
