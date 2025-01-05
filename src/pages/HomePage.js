import React, { useState } from 'react';

const HomePage = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() === '') return;
        const task = { text: newTask, completed: false };
        setTasks([...tasks, task]);
        setNewTask('');
    };

    const toggleTask = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Главная страница</h2>
            <ul id="myList" className="ul">
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        className={`task ${task.completed ? 'line' : ''}`}
                        onClick={() => toggleTask(index)}
                    >
                        {task.text}
                        <button
                            className="delete-button"
                            onClick={(e) => {
                                e.stopPropagation();
                                deleteTask(index);
                            }}
                        >
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
            <div className="point">
                <input
                    id="input"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Введите задачу"
                />
                <button id="button" onClick={addTask}>
                    Добавить
                </button>
            </div>
        </div>
    );
};

export default HomePage;
