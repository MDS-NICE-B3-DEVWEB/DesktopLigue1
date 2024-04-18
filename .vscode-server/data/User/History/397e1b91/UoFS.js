import React from 'react';
import { BrowserRouter as Routes } from 'react-router-dom';
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
        <Routes path="../pages/HomePage/HomePage" element={<Home />} />
        <Routes path="../pages/Classement/Classement" element={<Classement />} />
        <Routes path="../pages/Equipe/Equipe" element={<Equipe />} />
        {/* Define other routes as needed */}
      </Routes>
    </div>
  );
}

export default App;