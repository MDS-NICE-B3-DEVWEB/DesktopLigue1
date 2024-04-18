import React, { useState, useEffect } from 'react';


const ShowPlayer = ({ route }) => {
  const { playerID } = route.params;
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await fetch(`http://164.90.163.120:8000/api/joueur?id_saison=269&id_joueur=${playerID}`);
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
  }, [playerID]);

  return (
    <View style={styles.container}>
      {playerData ? (
        <>
          {playerData.photo ? (
            <Image source={{ uri: playerData.photo }} style={styles.playerImage} />
          ) : (
            <View style={styles.placeholderImage} />
          )}
          <Text style={styles.playerName}>{playerData.fullName}</Text>
          <Text style={styles.playerInfo}>Pays: {playerData.country.name}</Text>
          <Text style={styles.playerInfo}>Date de naissance: {playerData.additionalInfo.birthdate}</Text>
          <Text style={styles.playerInfo}>Taille: {playerData.additionalInfo.height}</Text>
          <Text style={styles.playerInfo}>Poids: {playerData.additionalInfo.weight}</Text>
          {playerData.teams && playerData.teams.map(team => (
            <Text key={team.teamID} style={styles.playerInfo}>
              Équipe: {team.teamName}, Numéro: {team.playerNumber}
            </Text>
          ))}
        </>
      ) : (
        <>
          <Text style={styles.errorText}>Chargement des données du joueur...</Text>
          <Text style={styles.errorText}>Veuillez patienter...</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#02153C',
  },
  playerName: {
    color: '#CEFB03',
    fontSize: 24,
    marginBottom: 10,
  },
  playerInfo: {
    color: 'white',
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
});

export default ShowPlayer;
