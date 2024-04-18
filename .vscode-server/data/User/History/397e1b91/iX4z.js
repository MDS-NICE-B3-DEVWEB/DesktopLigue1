import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from '../pages/Menu/Menu';
import Classement from '../pages/Classement/Classement';
import Equipe from '../pages/Equipe/Equipe';
import Home from '../pages/HomePage/HomePage';
// import other components as needed

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/classement" element={<Classement />} />
        <Route path="/equipe" element={<Equipe />} />
        {/* Define other routes as needed */}
      </Routes>
    </div>
  );
}

export default App;