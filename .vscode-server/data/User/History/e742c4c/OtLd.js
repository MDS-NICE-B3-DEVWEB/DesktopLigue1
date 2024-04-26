import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react';
import './TopPlayer.css'; // Importez les styles CSS

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
        <ScrollView horizontal={true} className="playerContainer">
          {goalScorers.map((player, index) => (
            <View key={index} className="player">
              <Image source={{ uri: player.photo }} className="playerImage" />
              <Text className="playerName">{player.fullname}</Text>
              <Text className="playerInfo">Équipe: {player.teamname}</Text>
              <Text className="playerInfo">Nombre de CSC: {player.eventCount}</Text>
            </View>
          ))}
        </ScrollView>
        <View className="divider"></View>
      </View>
    );
  };


  return (
    <ScrollView className="container">
      <View>
        <Text className="heading">Meilleurs buteurs</Text>
        {renderGoalScorers(goalScorers)}
        <Text className="heading">Meilleurs passeurs</Text>
        {renderAssistProvider(assistProviders)}
        <Text className="heading">Buts contre son camp</Text>
        {renderOwnGoalScorers(ownGoalScorers)}
        <Text className="heading">Meilleurs tireurs de penalty</Text>
        {renderPenaltyScorers(penaltyScorers)}
      </View>
    </ScrollView>
  );
};

export default TopPlayer;
