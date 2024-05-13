import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './User.css';

const User = () => {
  const [user, setUser] = useState(null); // Add this line

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://api.ligue1.live/api/log'); // Remplacez par l'URL de votre serveur
        const data = await response.json();
  
        if (data.status_code === 200) {
          const { name, email } = data.user;
          localStorage.setItem('name', name);
          localStorage.setItem('email', email);
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