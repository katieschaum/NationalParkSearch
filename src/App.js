import React from 'react';
import './components/Navbar'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/home';
import California from './views/california';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='california' element={<California />} />
      </Routes>
      </Router>

    </>
  );
}

export default App;
