import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import BentoBoxGrid from './pages/BentoBoxGrid';
import Test from './pages/Test';
import NavMenu from './assets/components/NavMenu';
import Test2 from './pages/main-comp/Test2';

function App() {
  return (
    <Router>
      <div>
        <NavMenu />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/bento" element={<BentoBoxGrid />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/test2" element={<Test2 />} />
        </Routes>

      </div>
    </Router>
  );
}




export default App;
