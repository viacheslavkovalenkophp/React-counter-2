import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
    const [theme, setTheme] = useState('light'); // Тема: 'light' или 'dark'

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light'); // Переключение темы
    };

    return (
        <Router>
            <div className={`app ${theme}`}> {/* Применяем класс темы */}
                <header>
                    <nav>
                        <Link to="/">Главная</Link>
                        <button onClick={toggleTheme}>
                            {theme === 'light' ? 'Темная тема' : 'Светлая тема'}
                        </button>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
