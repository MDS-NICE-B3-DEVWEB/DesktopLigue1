import React, { useEffect, useState } from 'react';
import './TopPlayer.css'; // Importez les styles CSS
import iconsanstete from '../../assets/img/iconsanstete.png';


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
      <div>
        <div className="playerContainer">
          {goalScorers.map((player, index) => (
            <div key={index} className="player">
              <img src={player.photo} className="playerImage" />
              <p className="playerName">{player.fullname}</p>
              <p className="playerInfo">Équipe: {player.teamname}</p>
              <p className="playerInfo">Nombre de but: {player.eventCount}</p>
            </div>
          ))}
        </div>
        <div className="divider"></div>
      </div>
    );
  };
  const renderAssistProvider = (assistProviders) => {
    return (
      <div>
        <div className="playerContainer">
          {assistProviders.map((player, index) => (
            <div key={index} className="player">
              <img src={player.photo} className="playerImage" />
              <p className="playerName">{player.fullname}</p>
              <p className="playerInfo">Équipe: {player.teamname}</p>
              <p className="playerInfo">Nombre de passe décisive: {player.eventCount}</p>
            </div>
          ))}
        </div>
        <div className="divider"></div>
      </div>
    );
  };

  const renderOwnGoalScorers = (ownGoalScorers) => {
    return (
      <div>
        <div className="playerContainer">
          {ownGoalScorers.map((player, index) => (
            <div key={index} className="player">
              <img src={player.photo} className="playerImage" />
              <p className="playerName">{player.fullname}</p>
              <p className="playerInfo">Équipe: {player.teamname}</p>
              <p className="playerInfo">Nombre de CSC: {player.eventCount}</p>
            </div>
          ))}
        </div>
        <div className="divider"></div>
      </div>
    );
  };

  const renderPenaltyScorers = (penaltyScorers) => {
    return (
      <div>
        <div className="playerContainer">
          {penaltyScorers.map((player, index) => (
            <div key={index} className="player">
              <img src={player.photo} className="playerImage" />
              <p className="playerName">{player.fullname}</p>
              <p className="playerInfo">Équipe: {player.teamname}</p>
              <p className="playerInfo">Nombre de pénalty réussi: {player.eventCount}</p>
            </div>
          ))}
        </div>
        <div className="divider"></div>
      </div>
    );
  };

  return (
    <div className="containerStat">
      <div>
        <h1 className="heading">Meilleurs buteurs</h1>
        {renderGoalScorers(goalScorers)}
        <h1 className="heading">Meilleurs passeurs</h1>
        {renderAssistProvider(assistProviders)}
        <h1 className="heading">Buts contre son camp</h1>
        {renderOwnGoalScorers(ownGoalScorers)}
        <h1 className="heading">Meilleurs tireurs de penalty</h1>
        {renderPenaltyScorers(penaltyScorers)}
      </div>
    </div>
  );
};

export default TopPlayer;
