import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const ShowEquipe = (props) => {
  const [teamData, setTeamData] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch(`http://164.90.163.120:8000/api/equipe?id_saison=269&id_equipe=${props.route.params.id_equipe}`);
        const data = await response.json();
        setTeamData(data.items.team);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeamData();
  }, [props.route.params.id_equipe]);

  const handlePlayerPress = (playerID) => {
    history.push(`/showPlayer/${playerID}`);
  };

  return (
    <div className="container">
      {teamData ? (
        <>
          <div className="logoContainer">
            {teamData.logo && <img src={teamData.logo} className="logo" alt="Team Logo" />}
          </div>
          <p className="teamName">{teamData.teamName}</p>
          <p className="stadium">{teamData.homeVenue.name}</p>
          <div className="playersContainer">
            {teamData.players && teamData.players.map((player) => (
              <div key={player.playerID} className="player" onClick={() => handlePlayerPress(player.playerID)}>
                {player.photo ? (
                  <img src={player.photo} className="playerImage" alt="Player Photo" />
                ) : (
                  <div className="playerImagePlaceholder" />
                )}
                <p className="playerName">{player.fullName}</p>
                <p className="playerNumber">#{player.playerNumber}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="errorText">Chargement des données de l'équipe...</p>
      )}
    </div>
  );
};

export default ShowEquipe;
