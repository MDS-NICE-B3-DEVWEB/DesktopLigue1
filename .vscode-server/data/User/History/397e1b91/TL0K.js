import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from '../pages/Menu/Menu';
import Classement from '../pages/Classement/Classement';
import Equipe from '../pages/Equipe/Equipe';
import Home from '../pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/classement" element={<Classement />} />
        <Route path="/equipe" element={<Equipe />} />
        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;