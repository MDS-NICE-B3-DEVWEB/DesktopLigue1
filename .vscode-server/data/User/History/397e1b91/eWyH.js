import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from '../pages/Menu/Menu';
import Classement from '../pages/Classement/Classement';
import Equipe from '../pages/Equipe/Equipe';
import Home from '../pages/HomePage/HomePage';
import Equipetop from '../components/EquipeTop/Equipetop';
import RegisterForm from '../components/forms/RegisterForm/RegisterForm';
import Match from '../pages/Match/Match';
import ShowEquipe from '../pages/ShowEquipe/ShowEquipe'; // Importez le composant ShowEquipe

function App() {
  return (
    <Router>
      <Equipetop />
      <Menu /> 
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/classement" element={<Classement />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/match" element={<Match />} />
        {/* Utilisez ShowEquipe avec l'ID de l'URL */}
        <Route path="/ShowEquipe/:id" element={<ShowEquipe />} /> 
      </Routes>
    </Router>
  );
}

export default App;
