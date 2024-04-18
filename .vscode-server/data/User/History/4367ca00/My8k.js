import React, { useEffect, useState } from 'react';

function Classement() {
  const [equipes, setEquipes] = useState([]);

  useEffect(() => {
    fetch('http://164.90.163.120:8000/api/classement', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_saison: 'votre_id_saison', // Remplacez 'votre_id_saison' par l'ID de la saison que vous voulez récupérer
      }),
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
          <h2>{equipe.equipe.name}</h2>
          <p>Participant ID: {equipe.participantID}</p>
        </div>
      ))}
    </div>
  );
}

export default Classement;