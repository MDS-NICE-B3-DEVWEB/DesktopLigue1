import React, { useState, useEffect } from 'react';

const ShowPlayer = ({ match }) => {
  const { playerID } = match.params;
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await fetch(`http://164.90.163.120:8000/api/joueur?id_saison=269&id_joueur=${playerID}`);
        const data = await response.json();
        
        // Vérifie si la réponse contient des données de joueur valides
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
  }, [playerID]);

  return (
    <div>
      {playerData ? (
        <>
          {/* Affichage de l'image du joueur s'il y en a */}
          {playerData.photo ? (
            <img src={playerData.photo} alt="Player" style={styles.playerImage} />
          ) : (
            // Affichage d'un carré de couleur si l'image n'est pas disponible
            <div style={styles.placeholderImage} />
          )}
          <h1 style={styles.playerName}>{playerData.fullName}</h1>
          <p style={styles.playerInfo}>Pays: {playerData.country.name}</p>
          <p style={styles.playerInfo}>Date de naissance: {playerData.additionalInfo.birthdate}</p>
          {/* Affichage de la taille et du poids */}
          <p style={styles.playerInfo}>Taille: {playerData.additionalInfo.height}</p>
          <p style={styles.playerInfo}>Poids: {playerData.additionalInfo.weight}</p>
          {/* Affichage des équipes avec leurs numéros */}
          {playerData.teams && playerData.teams.map(team => (
            <p key={team.teamID} style={styles.playerInfo}>
              Équipe: {team.teamName}, Numéro: {team.playerNumber}
            </p>
          ))}
        </>
      ) : (
        <>
          <p style={styles.errorText}>Chargement des données du joueur...</p>
          <p style={styles.errorText}>Veuillez patienter...</p>
        </>
      )}
    </div>
  );
};

const styles = {
  playerName: {
    fontSize: 24,
    marginBottom: 10,
  },
  playerInfo: {
    fontSize: 18,
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
  playerImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  placeholderImage: {
    width: 200,
    height: 200,
    backgroundColor: '#777',
    marginBottom: 20,
  },
};

export default ShowPlayer;
