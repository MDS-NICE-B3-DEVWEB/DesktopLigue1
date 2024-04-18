import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const ShowEquipe = () => {
  const { id } = useParams();
  const [equipeData, setEquipeData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    function fetchEquipeData(id_saison, id_equipe) {
      if (!id_equipe) {
        console.error('Team ID is undefined');
        return;
      }
    
      // Fetch data from the API
      fetch(`164.90.163.120:8000/api/equipe?id_saison=${id_saison}&id_equipe=${id_equipe}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error fetching team data:', error));
    });
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
    <div>
      <h1>{equipeData.teamName}</h1>
      <img src={equipeData.logo} alt={equipeData.teamName} />
      <h2>Players:</h2>
      <ul>
        {equipeData.players.map((player) => (
          <li key={player.playerID}>
            <h3>{player.fullName}</h3>
            <p>Position: {player.additionalInfo.position}</p>
            {/* Ajoutez d'autres informations du joueur ici */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowEquipe;
