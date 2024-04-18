import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from '../pages/Menu/Menu';
import Classement from '../pages/Classement/Classement';
import Equipe from '../pages/Equipe/Equipe';
import Home from '../pages/HomePage/HomePage';
import Equipetop from '../components/EquipeTop/Equipetop';
// import other components as needed

function App() {
  return (
    <Router>
      
      <div>
        <Menu />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/classement" element={<Classement />} />
          <Route path="/equipe" element={<Equipe />} />
          {/* Define other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;