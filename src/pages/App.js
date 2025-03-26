import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from '../components/Navbar';
import Home from './Home';
import Movies from './Movies';
import '../App.css';


function App() {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
            </Routes>
        </Router>
    );
}

export default App;
