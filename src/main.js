import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ResumePage from './pages/resume'
import Home from './pages/index';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} exact />
        <Route path="/resume" component={ResumePage} exact />
      </Routes>
    </Router>
  );
}

export default Main;
