import React, { useEffect, useState } from 'react';
import './Classement.css'; // Import the CSS file

function Classement() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const id_saison = '269'; // Replace 'your_season_id' with the ID of the season you want to retrieve
    fetch(`http://164.90.163.120:8000/api/classement?id_saison=${id_saison}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.fullName}</h1>
          {data.teams.map((team, index) => (
            <div key={index} className="team">
              <h2>{team.teamName}</h2>
              <p>Matches Won: {team.matchesWon}</p>
              <p>Matches Drawn: {team.matchesDrawn}</p>
              <p>Matches Lost: {team.matchesLost}</p>
              <p>Points: {team.points}</p>
              {team.logo && <img src={team.logo} alt={team.teamName} />}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Classement;