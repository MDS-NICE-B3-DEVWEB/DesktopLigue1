import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ShowEquipe.css';

const ShowEquipe = () => {
  const { id } = useParams();
  const [equipeData, setEquipeData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEquipeData = async () => {
      try {
        const response = await fetch(`https://api.ligue1.liv/api/equipe?id_saison=269&id_equipe=${id}`);
        const data = await response.json();
        setEquipeData(data.items.team);
      } catch (error) {
        console.error('Error fetching team data:', error);
        setError(error.toString());
      }
    };

    fetchEquipeData();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!equipeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="containershowequipe">
      <div className="logoContainer">
        {equipeData.logo && <img src={equipeData.logo} alt={equipeData.teamName} className="logo" />}
      </div>
      <h1 className="teamName">{equipeData.teamName}</h1>
      <p className="stadium">{equipeData.homeVenue.name}</p>
      <div className="playersContainer">
        {equipeData.players && equipeData.players.map((player) => (
          <Link to={`/ShowPlayer/${player.playerID}`} key={player.playerID} className="playerLink">
            <div className="player">
              {player.photo ? (
                <img src={player.photo} alt={player.fullName} className="playerImage" />
              ) : (
                <div className="playerImagePlaceholder" />
              )}
              <p className="playerName">{player.fullName}</p>
              <p className="playerNumber">#{player.playerNumber}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShowEquipe;
