import React, { useEffect, useState } from 'react';
import './Classement.css'; // Import the CSS file

function Classement() {
  const [data, setData] = useState(null);
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
    fetch(`https://api.ligue1.live/api/classement?id_saison=${selectedSeasonId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log('Response:', response); // Log the response object
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.text(); // Read the response as text
    })
    .then((text) => {
      console.log('Response Text:', text); // Log the response text
      const jsonData = JSON.parse(text); // Try to parse the text as JSON
      setData(jsonData); // Update the state with the parsed JSON data
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, [selectedSeasonId]); // Ajout de selectedSeasonId dans le tableau de dépendances

  return (
    <div>
      <select value={selectedSeasonId} onChange={e => setSelectedSeasonId(e.target.value)}>
        {seasons.map(season => (
          <option key={season.id} value={season.id}>
            {season.name}
          </option>
        ))}
      </select>
      {data ? (
        <div>
          <table className="table-standings">
            <thead>
              <tr>
                <th>Team</th>
                <th>Won</th>
                <th>Drawn</th>
                <th>Lost</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {data.teams.map((team, index) => (
                <tr key={index}>
                  <td className="team-name">
                    {team.logo && <img src={team.logo} alt={team.teamName} className="team-logo" />}
                    {team.teamName}
                  </td>
                  <td className="matches-won">{team.matchesWon}</td>
                  <td className="matches-drawn">{team.matchesDrawn}</td>
                  <td className="matches-lost">{team.matchesLost}</td>
                  <td className="points">{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Classement;