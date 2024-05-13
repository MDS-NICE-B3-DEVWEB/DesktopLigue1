import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './User.css';

const User = () => {

  useEffect(() => {
    const getData = () => {
      try {
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        if (name !== null && email !== null) {
          setUser({ name, email });
        }
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

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