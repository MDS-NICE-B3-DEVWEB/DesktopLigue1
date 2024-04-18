import React, { useEffect, useState } from 'react';

function Classement() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const id_saison = '269'; // Remplacez 'votre_id_saison' par l'ID de la saison que vous voulez récupérer
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
        console.error('Erreur:', error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.fullName}</h1>
          {data.teams.map((team, index) => (
            <div key={index}>
              <h2>{team.teamName}</h2>
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