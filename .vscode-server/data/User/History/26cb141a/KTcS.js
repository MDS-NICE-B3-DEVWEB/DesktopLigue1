import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './User.css';

const User = () => {
  const [user, setUser] = useState(null); // Add this line

  Object { status_code: 200, message: "Utilisateur connecté avec succès", user: {…}, access_token: "8|ptGnB8JEMOjq0NzpWr3f3C6EOorjSajpnMNpbLLR07f54581" }
  LoginForm.js:18
  SyntaxError: JSON.parse: unexpected end of data at line 1 column 1 of the JSON data User.js:21
  SyntaxError: JSON.parse: unexpected end of data at line 1 column 1 of the JSON data

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      localStorage.removeItem('email');
      setUser(null);
      // Après la déconnexion, naviguer vers l'écran de connexion
      history.push('/Accueil');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <p className="header">Mon Compte</p>
      <p className="userInfo">Nom: {user ? user.name : ''}</p>
      <p className="userInfo">Email: {user ? user.email : ''}</p>
      <button className="button" onClick={handleLogout}>
        Déconnexion
      </button>
    </div>
  );
};

export default User;