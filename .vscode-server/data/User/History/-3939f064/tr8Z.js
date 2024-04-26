import React, { useEffect, useState } from 'react';
import './ResumeVideo.css'; // Importez les styles CSS

const ResumeVideo = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const apiKey = "AIzaSyCsByhNHAoZaHG0qFkiPSVNG4MhwG32_Yg"; // Remplacez par votre propre clé API YouTube
        const channelId = "UCQsH5XtIc9hONE1BQjucM0g"; // Remplacez par l'ID de votre chaîne YouTube

        const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.items) {
          setVideos(data.items);
        } else {
          console.error('Error: No videos found in response');
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Vidéos</h1>
      {videos.map((video, index) => (
        <div key={index} className="videoContainer">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="videoTitle">{video.snippet.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ResumeVideo;