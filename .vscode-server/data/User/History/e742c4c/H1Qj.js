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
        const goalScorersResponse = await fetch('http://164.90.163.120:8000/api/stat?id_saison=269&id_event=1');
        const goalScorersData = await goalScorersResponse.json();
        if (goalScorersData && goalScorersData.items && goalScorersData.items.season && goalScorersData.items.season.players) {
          setGoalScorers(goalScorersData.items.season.players);
        } else {
          console.error('Error: Goal scorers data not found in response');
        }

        // Fetch for assist providers
        // Fetch for own goal scorers
        // Fetch for penalty scorers
        // ...
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
