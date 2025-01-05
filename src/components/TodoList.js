import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from '../store/todoSlice';

const TodoList = () => {
    const todos = useSelector(selectTodos);

    return (
        <div className="container">
            <h2>Список задач:</h2>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
