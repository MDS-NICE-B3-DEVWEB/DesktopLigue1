import React, { useEffect, useState } from 'react';
import './Match.css'; // Import du fichier CSS

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
      <button
        key={index}
        className={`matchdayButton ${matchday.matchdayID === selectedMatchday ? 'selectedMatchdayButton' : ''}`}
        onClick={() => setSelectedMatchday(matchday.matchdayID)}>
        Jour {index + 1}
      </button>
    ));
  };

  const renderMatches = () => {
    if (!selectedMatchday) return null;

    const selectedMatchdayData = matches.find(matchday => matchday.matchdayID === selectedMatchday);
    if (!selectedMatchdayData) return null;

    return (
      <div className="matchesContainer">
        {selectedMatchdayData.matches.map((match, idx) => (
          <div key={idx} className="matchContainer">
            <div className="MatchteamContainer">
              <img src={match.homeParticipant.logo} className="teamLogo" alt="Home Team Logo" />
              <p className="teamName">{match.homeParticipant.participantName}</p>
            </div>
            <div className="scoreContainer">
              <p className="scoreText">{match.homeParticipant.score}</p>
              <p className="scoreText">-</p>
              <p className="scoreText">{match.awayParticipant.score}</p>
            </div>
            <div className="MatchteamContainer">
              <img src={match.awayParticipant.logo} className="teamLogo" alt="Away Team Logo" />
              <p className="teamName">{match.awayParticipant.participantName}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="topSection"></div>
      <div className="matchdayButtonsContainer">{renderMatchdays()}</div>
      <div className="matchesScrollViewContainer">{renderMatches()}</div>
    </div>
  );
};

export default MatchScreen;
