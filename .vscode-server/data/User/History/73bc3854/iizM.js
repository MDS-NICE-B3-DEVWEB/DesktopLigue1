import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react';
import styles from './Match.css';

const MatchScreen = () => {
  const [matches, setMatches] = useState([]);
  const [selectedMatchday, setSelectedMatchday] = useState(null);

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    try {
      const response = await fetch('http://164.90.163.120:8000/api/match?id_saison=269', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data && data.items && data.items.calendar && data.items.calendar.matchdays) {
        setMatches(data.items.calendar.matchdays);
        if (data.items.calendar.matchdays.length > 0) {
          setSelectedMatchday(data.items.calendar.matchdays[0].matchdayID);
        }
      } else {
        console.error('Error: Match data not found in response');
      }
    } catch (error) {
      console.error('Error fetching match data:', error);
    }
  };

  const renderMatchdays = () => {
    return matches.map((matchday, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.matchdayButton, matchday.matchdayID === selectedMatchday && styles.selectedMatchdayButton]}
        onPress={() => setSelectedMatchday(matchday.matchdayID)}>
        <Text style={styles.matchdayText}>Jour {index + 1}</Text>
      </TouchableOpacity>
    ));
  };

  const renderMatches = () => {
    if (!selectedMatchday) return null;

    const selectedMatchdayData = matches.find(matchday => matchday.matchdayID === selectedMatchday);
    if (!selectedMatchdayData) return null;

    return (
      <View style={styles.matchesContainer}>
        {selectedMatchdayData.matches.map((match, idx) => (
          <View key={idx} style={styles.matchContainer}>
            <View style={styles.teamContainer}>
              <Image source={{ uri: match.homeParticipant.logo }} style={styles.teamLogo} />
              <Text style={styles.teamName}>{match.homeParticipant.participantName}</Text>
            </View>
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>{match.homeParticipant.score}</Text>
              <Text style={styles.scoreText}>-</Text>
              <Text style={styles.scoreText}>{match.awayParticipant.score}</Text>
            </View>
            <View style={styles.teamContainer}>
              <Image source={{ uri: match.awayParticipant.logo }} style={styles.teamLogo} />
              <Text style={styles.teamName}>{match.awayParticipant.participantName}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.matchdayButtonsContainer}>
        {renderMatchdays()}
      </ScrollView>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {renderMatches()}
      </ScrollView>
    </View>
  );
};

export default MatchScreen;
