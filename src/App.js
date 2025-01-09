import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home.js';
import SWAPI from '../src/pages/SWAPI.js';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />  {}
                <Route path="/swapi" element={<SWAPI />} />  {}
            </Routes>
        </Router>
    );
}

export default App;
