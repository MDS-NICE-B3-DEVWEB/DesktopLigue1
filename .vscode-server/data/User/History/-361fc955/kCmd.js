import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from '../pages/Menu/Menu';
import Classement from '../pages/Classement/Classement';
import Equipe from '../pages/Equipe/Equipe';
import Home from '../pages/HomePage/HomePage';
import Equipetop from '../components/EquipeTop/Equipetop';
import LoginForm from '../components/forms/LoginForm/LoginForm';
import RegisterForm from '../components/forms/RegisterForm/RegisterForm';
import Match from '../pages/Match/Match';
import ShowEquipe from '../pages/ShowEquipe/ShowEquipe'; // Importez le composant ShowEquipe
import ShowPlayer from '../pages/ShowPlayer/ShowPlayer'; // Importez le composant ShowPlayer
import TopPlayer from '../pages/TopPlayer/TopPlayer';
import ResumeVideo from '../pages/ResumeVideo/ResumeVideo';
import User from '../pages/User/User';

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    setIsUserLoggedIn(localStorage.getItem('access_token') !== null);
  }, []);

  return (
    <Router>
      <Equipetop />
      <Menu /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classement" element={<Classement />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/user" element={<User />} />
        <Route path="/match" element={<Match />} />
        <Route path="/topplayer" element={<TopPlayer />} />
        <Route path="/resumevideo" element={<ResumeVideo />} />
        {/* Utilisez ShowEquipe avec l'ID de l'URL */}
        <Route path="/ShowEquipe/:id" element={<ShowEquipe />} /> 
        <Route path="/ShowPlayer/:id" element={<ShowPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;