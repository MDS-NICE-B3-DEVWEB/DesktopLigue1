import React, { useEffect, useState } from 'react';

function Classement() {
  const [equipes, setEquipes] = useState([]);

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
        setEquipes(data.items);
      })
      .catch((error) => {
        console.error('Erreur:', error);
      });
  }, []);

  return (
    <div>
      {equipes.map((equipe, index) => (
        <div key={index}>
          <h2>{equipe.equipe.teamName}</h2>
          <p>Participant ID: {equipe.participantID}</p>
        </div>
      ))}
    </div>
  );
}

export default Classement;