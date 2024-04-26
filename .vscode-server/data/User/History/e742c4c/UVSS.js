import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from './TopPlayerStyles'; // Importez les styles CSS

const TopPlayer = () => {
  const [goalScorers, setGoalScorers] = useState([]);
  const [assistProviders, setAssistProviders] = useState([]);
  const [ownGoalScorers, setOwnGoalScorers] = useState([]);
  const [penaltyScorers, setPenaltyScorers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        // Fetch for goal scorers
        const goalScorersResponse = await fetch('https://api.ligue1.live/api/stat?id_saison=269&id_event=1');
        const goalScorersData = await goalScorersResponse.json();
        if (goalScorersData && goalScorersData.items && goalScorersData.items.season && goalScorersData.items.season.players) {
          setGoalScorers(goalScorersData.items.season.players);
        } else {
          console.error('Error: data not found in response');
        }
        const assistProvidersResponse = await fetch('https://api.ligue1.live/api/stat?id_saison=269&id_event=2');
        const assistProvidersData = await assistProvidersResponse.json();
        if (assistProvidersData && assistProvidersData.items && assistProvidersData.items.season && assistProvidersData.items.season.players) {
            setAssistProviders(assistProvidersData.items.season.players);
        } else {
          console.error('Error: data not found in response');
        }
        const ownGoalScorersResponse = await fetch('https://api.ligue1.live/api/stat?id_saison=269&id_event=3');
        const ownGoalScorersData = await ownGoalScorersResponse.json();
        if (ownGoalScorersData && ownGoalScorersData.items && ownGoalScorersData.items.season && ownGoalScorersData.items.season.players) {
            setOwnGoalScorers(ownGoalScorersData.items.season.players);
        } else {
          console.error('Error: data not found in response');
        }
        const penaltyScorersResponse = await fetch('https://api.ligue1.live/api/stat?id_saison=269&id_event=3');
        const penaltyScorersData = await penaltyScorersResponse.json();
        if (penaltyScorersData && penaltyScorersData.items && penaltyScorersData.items.season && penaltyScorersData.items.season.players) {
            setPenaltyScorers(penaltyScorersData.items.season.players);
        } else {
          console.error('Error: data not found in response');
        }


      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayers();
  }, []);

  // Functions to render player lists
  const renderGoalScorers = (goalScorers) => {
    return (
      <View>
        <ScrollView horizontal={true} style={styles.playerContainer}>
          {ownGoalScorers.map((player, index) => (
            <View key={index} style={styles.player}>
              <Image source={{ uri: player.photo }} style={styles.playerImage} />
              <Text style={styles.playerName}>{player.fullname}</Text>
              <Text style={styles.playerInfo}>Équipe: {player.teamname}</Text>
              <Text style={styles.playerInfo}>Nombre de CSC: {player.eventCount}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.divider}></View>
      </View>
    );
  };
  const renderOwnGoalScorers = (ownGoalScorers) => {
    return (
      <View>
        <ScrollView horizontal={true} style={styles.playerContainer}>
          {ownGoalScorers.map((player, index) => (
            <View key={index} style={styles.player}>
              <Image source={{ uri: player.photo }} style={styles.playerImage} />
              <Text style={styles.playerName}>{player.fullname}</Text>
              <Text style={styles.playerInfo}>Équipe: {player.teamname}</Text>
              <Text style={styles.playerInfo}>Nombre de CSC: {player.eventCount}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.divider}></View>
      </View>
    );
  };
  const renderOwnGoalScorers = (ownGoalScorers) => {
    return (
      <View>
        <ScrollView horizontal={true} style={styles.playerContainer}>
          {ownGoalScorers.map((player, index) => (
            <View key={index} style={styles.player}>
              <Image source={{ uri: player.photo }} style={styles.playerImage} />
              <Text style={styles.playerName}>{player.fullname}</Text>
              <Text style={styles.playerInfo}>Équipe: {player.teamname}</Text>
              <Text style={styles.playerInfo}>Nombre de CSC: {player.eventCount}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.divider}></View>
      </View>
    );
  };

  const renderPenaltyScorers = (penaltyScorers) => {
    return (
      <View>
        <ScrollView horizontal={true} style={styles.playerContainer}>
          {penaltyScorers.map((player, index) => (
            <View key={index} style={styles.player}>
              <Image source={{ uri: player.photo }} style={styles.playerImage} />
              <Text style={styles.playerName}>{player.fullname}</Text>
              <Text style={styles.playerInfo}>Équipe: {player.teamname}</Text>
              <Text style={styles.playerInfo}>Nombre de penalties: {player.eventCount}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.heading}>Meilleurs buteurs</Text>
        {renderGoalScorers(goalScorers)}
        <Text style={styles.heading}>Meilleurs passeurs</Text>
        {/* Render assist providers */}
        {/* ... */}
        <Text style={styles.heading}>Buts contre son camp</Text>
        {renderOwnGoalScorers(ownGoalScorers)}
        <Text style={styles.heading}>Meilleurs tireurs de penalty</Text>
        {renderPenaltyScorers(penaltyScorers)}
      </View>
    </ScrollView>
  );
};

export default TopPlayer;