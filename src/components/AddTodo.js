import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

const AddTodo = () => {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoText.trim()) {
            dispatch(addTodo({ text: todoText }));
            setTodoText('');
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    placeholder="Добавить задачу"
                />
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
};

export default AddTodo;  {}
