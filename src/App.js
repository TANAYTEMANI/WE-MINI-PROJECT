import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <HeroSection/>
    <Routes>
      <Route path='/' exact/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
