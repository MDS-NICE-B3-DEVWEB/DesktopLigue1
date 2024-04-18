import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ShowTeam = (props) => {
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch(`http://164.90.163.120:8000/api/equipe?id_saison=269&id_equipe=${props.id_equipe}`);
        const data = await response.json();
        setTeamData(data.items.team);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeamData();
  }, [props.id_equipe]);

  return (
    <div style={styles.container}>
      {teamData ? (
        <>
          <div style={styles.logoContainer}>
            {teamData.logo && <img src={teamData.logo} style={styles.logo} alt="Team Logo" />}
          </div>
          <h1 style={styles.teamName}>{teamData.teamName}</h1>
          <p style={styles.stadium}>{teamData.homeVenue.name}</p>
          <div style={styles.playersContainer}>
            {teamData.players && teamData.players.map((player) => (
              <div key={player.playerID} style={styles.player}>
                {player.photo ? (
                  <img src={player.photo} style={styles.playerImage} alt="Player" />
                ) : (
                  <div style={styles.playerImagePlaceholder} />
                )}
                <p style={styles.playerName}>{player.fullName}</p>
                <p style={styles.playerNumber}>#{player.playerNumber}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p style={styles.errorText}>Chargement des données de l'équipe...</p>
      )}
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#02153C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  teamName: {
    color: '#CEFB03',
    fontSize: 24,
    marginBottom: 10,
  },
  stadium: {
    color: '#CEFB03',
    fontSize: 18,
    marginBottom: 20,
  },
  playersContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  player: {
    alignItems: 'center',
    margin: 10,
  },
  playerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  playerImagePlaceholder: {
    width: 80,
    height: 80,
    marginBottom: 5,
    backgroundColor: '#02153C', // Couleur de fond pour l'image de remplacement
  },
  playerName: {
    color: 'white',
    marginBottom: 2,
  },
  playerNumber: {
    color: 'white',
  },
  errorText: {
    color: 'white',
    fontSize: 18,
  }
});

export default ShowTeam;
