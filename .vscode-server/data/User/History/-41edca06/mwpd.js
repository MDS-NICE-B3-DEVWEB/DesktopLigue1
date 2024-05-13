import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ShowPlayer.css'; // Import du fichier CSS
import iconsanstete from '../../assets/img/iconsanstete.png'; // Import de l'image

const ShowPlayer = () => {
  const { id } = useParams();
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await fetch(`https://api.ligue1.live/api/joueur?id_saison=269&id_joueur=${id}`);
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
            <img src={playerData.photo} alt="Player" className="ShowplayerImage" /> // Ajout de la classe CSS
          ) : (
            <img src={iconsanstete} className="playerImage" />
          )}
          <h1 className="ShowplayerName">{playerData.fullName}</h1> 
          <p className="ShowplayerInfo">Pays: {playerData.country.name}</p> 
          <p className="ShowplayerInfo">Date de naissance: {playerData.additionalInfo.birthdate}</p> 
          <p className="ShowplayerInfo">Taille: {playerData.additionalInfo.height}</p> 
          <p className="ShowplayerInfo">Poids: {playerData.additionalInfo.weight}</p> 
          {playerData.teams && playerData.teams.map(team => (
            <p key={team.teamID} className="ShowplayerInfo"> 
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
