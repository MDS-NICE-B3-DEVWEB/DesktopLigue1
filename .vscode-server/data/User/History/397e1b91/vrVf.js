import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from '../pages/Menu/Menu';
import Classement from '../pages/Classement/Classement';
import Equipe from '../pages/Equipe/Equipe';
import Home from '../pages/HomePage/HomePage';
import Equipetop from '../components/EquipeTop/Equipetop';
import RegisterForm from '../components/forms/RegisterForm/RegisterForm';
import Match from '../pages/Match/Match';
import LoginForm from '../components/forms/LoginForm/LoginForm';
// import other components as needed

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
        <Route path="/login" element={<LoginForm />} />
        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;