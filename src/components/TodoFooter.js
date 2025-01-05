import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from '../store/todoSlice';

const TodoFooter = () => {
    const todos = useSelector(selectTodos);

    return (
        <footer className="footer">
            <p>Общее количество задач: {todos.length}</p>
        </footer>
    );
};

export default TodoFooter;
