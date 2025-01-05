import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <Router>
            <div className={`app ${theme}`}>
                <header>
                    <nav>
                        <Link to="/">Главная</Link>
                        <Link to="/contacts">Контакты</Link>
                        <Link to="/about">Про меня</Link>
                        <button onClick={toggleTheme}>
                            Переключить тему
                        </button>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/contacts" element={<ContactsPage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
