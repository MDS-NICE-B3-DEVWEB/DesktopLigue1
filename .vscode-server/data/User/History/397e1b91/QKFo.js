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
        <Route path="../pages/HomePage/HomePage" element={<Home />} />
        <Route path="../pages/Classement/Classement" element={<Classement />} />
        <Route path="../pages/Equipe/Equipe" element={<Equipe />} />
        {/* Define other routes as needed */}
      </Routes>
    </div>
  );
}

export default App;