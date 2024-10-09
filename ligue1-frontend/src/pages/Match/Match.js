import React, { useEffect, useState } from 'react';
import './Match.css'; // Import du fichier CSS

const MatchScreen = () => {
  const [matches, setMatches] = useState([]);
  const [selectedMatchday, setSelectedMatchday] = useState(null);
  const [selectedSeasonId, setSelectedSeasonId] = useState('358'); // État initialisé avec l'ID de la saison par défaut
  const seasons = [ // Tableau des saisons et leurs IDs
    { name: '2018-19', id: '4' },
    { name: '2019-20', id: '23' },
    { name: '2020-21', id: '55' },
    { name: '2021-22', id: '110' },
    { name: '2022-23', id: '167' },
    { name: '2023-24', id: '269' },
    { name: '2024-25', id: '358' },
    // Ajoutez d'autres saisons ici
  ];

  useEffect(() => {
    fetchMatches();
  }, [selectedSeasonId]); 

  const fetchMatches = async () => {
    try {
      const response = await fetch(`https://api.ligue1.live/api/match?id_saison=${selectedSeasonId}`, {
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

    function SeasonSelector({ seasons, selectedSeasonId, setSelectedSeasonId }) {
      return (
        <div>
          <select value={selectedSeasonId} onChange={e => setSelectedSeasonId(e.target.value)}>
            {seasons.map(season => (
              <option key={season.id} value={season.id}>
                {season.name}
              </option>
            ))}
          </select>
        </div>
      );
    }
    
    return (
      <div className="matchesContainer">
        {selectedMatchdayData.matches.map((match, idx) => (
          <div key={idx} className="matchContainer">
            <div className="teamContainerMatch">
              <img src={match.homeParticipant.logo} className="teamLogoMatch" alt="Home Team Logo" />
              <p className="teamNameMatch">{match.homeParticipant.participantName}</p>
            </div>
            <div className="scoreContainerMatch">
              <p className="scoreText">{match.homeParticipant.score}</p>
              <p className="scoreText">-</p>
              <p className="scoreText">{match.awayParticipant.score}</p>
            </div>
            <div className="teamContainerMatch">
              <img src={match.awayParticipant.logo} className="teamLogoMatch" alt="Away Team Logo" />
              <p className="teamNameMatch">{match.awayParticipant.participantName}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
 

  return (
    
    <div className="containerMatch">
      <select value={selectedSeasonId} onChange={e => setSelectedSeasonId(e.target.value)}>
        {seasons.map(season => (
          <option key={season.id} value={season.id}>
            {season.name}
          </option>
        ))}
      </select>
      <div className="topSection"></div>
      <div className="matchdayButtonsContainer">
        <div className="matchdayButtonsScrollView">{renderMatchdays()}</div>
      </div>
      <div className="matchesScrollViewContainer">{renderMatches()}</div>
      
    </div>
  );
};

export default MatchScreen;
