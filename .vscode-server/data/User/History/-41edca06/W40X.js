import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ShowPlayer.css'; // Import du fichier CSS
import iconsanstete from '../../assets/img/iconsanstete.png'; // Import de l'image
import { UserContext } from '../../components/UserContext/UserContext'; // Importez le contexte de l'utilisateur



const ShowPlayer = () => {
  const { id } = useParams();
  const [playerData, setPlayerData] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { user } = useContext(UserContext); // Utilisez le contexte de l'utilisateur pour déterminer si l'utilisateur est connecté


  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const response = await fetch(`https://api.ligue1.live/api/joueur?id_saison=269&id_joueur=${id}`);
        const data = await response.json();
        
        if (data && data.items && data.items.player) {
          setPlayerData(data.items.player);
        } else {
          console.error('Error: Player data not found in response');
        }
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };
  
    fetchPlayerData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://api.ligue1.live/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          user_id: user.id, // Utilisez l'ID de l'utilisateur connecté
        }),
      });

      if (!response.ok) {
        throw new Error('Error creating post');
      }

      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container"> {/* Ajout de la classe CSS pour centrer le contenu */}
      {playerData ? (
        <>
          {playerData.photo ? (
            <img src={playerData.photo} alt="Player" className="ShowplayerImage" /> // Ajout de la classe CSS
          ) : (
            <img src={iconsanstete} className="playerImage" />
          )}
          <h1 className="ShowplayerName">{playerData.fullName}</h1> 
          <p className="ShowplayerInfo">Pays: {playerData.country.name}</p> 
          <p className="ShowplayerInfo">Date de naissance: {playerData.additionalInfo.birthdate}</p> 
          <p className="ShowplayerInfo">Taille: {playerData.additionalInfo.height}</p> 
          <p className="ShowplayerInfo">Poids: {playerData.additionalInfo.weight}</p> 
          {playerData.teams && playerData.teams.map(team => (
            <p key={team.teamID} className="ShowplayerInfo"> 
              Équipe: {team.teamName}, Numéro: {team.playerNumber}
            </p>
          ))}
        </>
      ) : (
        <>
          <p className="errorText">Chargement des données du joueur...</p>
          <p className="errorText">Veuillez patienter...</p>
        </>
      )}
        {user && ( // Affichez le formulaire uniquement si l'utilisateur est connecté
        <form onSubmit={handleSubmit}>
          <label>
            Titre:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </label>
          <label>
            Description:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
          </label>
          <button type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );
};

export default ShowPlayer;
