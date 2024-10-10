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
import SignInUI from './pages/SignInUI';
import PortfolioUI from './pages/portfolio-comp/PortfolioUI';
import { NavMenuProvider } from './context/NavMenuContext';
import KBDetailUI from './pages/portfolio-comp/detail/KBDetailUI';

function App() {
  return (
    <Router>
      <NavMenuProvider>
        <div>
          <NavMenu />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/bento" element={<BentoBoxGrid />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/test2" element={<Test2 />} />
            <Route path="/sign" element={<SignInUI />} />
            <Route path="/portfolio" element={<PortfolioUI />} />
            <Route path="/portfolio/kb" element={<KBDetailUI />} />
          </Routes>

        </div>
      </NavMenuProvider>
    </Router>
  );
}




export default App;
