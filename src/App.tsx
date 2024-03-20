import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import BentoBoxGrid from './pages/BentoBoxGrid';
import Test from './pages/Test';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bento" element={<BentoBoxGrid />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}




export default App;
