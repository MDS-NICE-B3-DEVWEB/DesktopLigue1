import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import './User.css';

const User = () => {
  const history = useHistory(); // Get the history object
  const [user, setUser] = useState({
    name: localStorage.getItem('name'),
    email: localStorage.getItem('email'),
    points: localStorage.getItem('points')
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://api.ligue1.live/api/user'); // Make a fetch request
        const data = await response.json(); // Parse the response as JSON

        if (data.status_code === 200) {
          console.log(data);
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
      localStorage.removeItem('points');
      setUser(null);
      history.push('/Accueil'); // Navigate to '/Accueil'
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <p className="header">Mon Compte</p>
      <p className="userInfo">Nom: {user ? user.name : ''}</p>
      <p className="userInfo">Email: {user ? user.email : ''}</p>
      <p className="userInfo">Points: {user ? user.points : ''}</p>
      <button className="button" onClick={handleLogout}>
        Déconnexion
      </button>
    </div>
  );
};

export default User;