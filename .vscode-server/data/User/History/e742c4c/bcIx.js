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
          setGoalScorers(assistProvidersData.items.season.players);
        } else {
          console.error('Error: data not found in response');
        }
        const ownGoalScorersResponse = await fetch('https://api.ligue1.live/api/stat?id_saison=269&id_event=3');
        const ownGoalScorersData = await ownGoalScorersResponse.json();
        if (ownGoalScorersData && ownGoalScorersData.items && ownGoalScorersData.items.season && ownGoalScorersData.items.season.players) {
          setGoalScorers(ownGoalScorersData.items.season.players);
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
  // ...

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        {/* Render player lists */}
        {/* ... */}
      </View>
    </ScrollView>
  );
};

export default TopPlayer;
