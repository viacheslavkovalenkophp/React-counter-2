import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, clearTodos } from './redux/actions/todoActions';

const App = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo?.todos || []);

    return (
        <div>
            <h1>Todo App</h1>
            <button onClick={() => dispatch(addTodo('Test Todo'))}>Add Todo</button>
            <button onClick={() => dispatch(clearTodos())}>Clear Todos</button>
            <ul>
                {todos.length > 0 ? (
                    todos.map((todo, index) => <li key={index}>{todo}</li>)
                ) : (
                    <p>No todos available</p>
                )}
            </ul>
        </div>
    );
};

export default App;
