import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './User.css';

const User = () => {
  const [user, setUser] = useState(null); // Add this line

  Object { status_code: 200, message: "Utilisateur connecté avec succès", user: {…}, access_token: "5|vWvCLZj3sWBX4Z2V2ho1pPpQy8PwkYjWtfhqzCAJaa223a9e" }
  ​
  access_token: "5|vWvCLZj3sWBX4Z2V2ho1pPpQy8PwkYjWtfhqzCAJaa223a9e"
  ​
  message: "Utilisateur connecté avec succès"
  ​
  status_code: 200
  ​
  user: Object { id: 1, name: "Louis", email: "louhourlier@gmail.com", … }
  ​
  <prototype>: Object { … }
  ​​
  __defineGetter__: function __defineGetter__()
  ​​
  __defineSetter__: function __defineSetter__()
  ​​
  __lookupGetter__: function __lookupGetter__()
  ​​
  __lookupSetter__: function __lookupSetter__()
  ​​
  __proto__: 
  ​​
  constructor: function Object()
  ​​
  hasOwnProperty: function hasOwnProperty()

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