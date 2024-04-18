import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ShowPlayer.css'; // Import du fichier CSS

const ShowPlayer = () => {
  const { id } = useParams();
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await fetch(`http://164.90.163.120:8000/api/joueur?id_saison=269&id_joueur=${id}`);
        const data = await response.json();
        
        if (data && data.items && data.items.player) {
          setPlayerData(data.items.player);
        } else {
          console.error('Error: Player data not found in response');
        }
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };
  
    fetchPlayerData();
  }, [id]);

  return (
    <div className="container"> {/* Ajout de la classe CSS pour centrer le contenu */}
      {playerData ? (
        <>
          {playerData.photo ? (
            <img src={playerData.photo} alt="Player" className="playerImage" /> // Ajout de la classe CSS
          ) : (
            <div className="placeholderImage" /> // Ajout de la classe CSS
          )}
          <h1 className="playerName">{playerData.fullName}</h1> 
          <p className="playerInfo">Pays: {playerData.country.name}</p> 
          <p className="playerInfo">Date de naissance: {playerData.additionalInfo.birthdate}</p> 
          <p className="playerInfo">Taille: {playerData.additionalInfo.height}</p> 
          <p className="playerInfo">Poids: {playerData.additionalInfo.weight}</p> 
          {playerData.teams && playerData.teams.map(team => (
            <p key={team.teamID} className="playerInfo"> 
              Équipe: {team.teamName}, Numéro: {team.playerNumber}
            </p>
          ))}
        </>
      ) : (
        <>
          <p className="errorText">Chargement des données du joueur...</p>
          <p className="errorText">Veuillez patienter...</p>
        </>
      )}
    </div>
  );
};

export default ShowPlayer;
