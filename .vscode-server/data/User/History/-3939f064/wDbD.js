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
    <div className="containerResumeVideo">
      <h1 className="headingResumeVideo">Vidéos</h1>
      {videos.map((video, index) => (
        <div key={index} className="videoContainer">
          <a
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="videoLink"
          >
            <img className="videoContainer"
              src={video.snippet.thumbnails.default.url} // Utilisez l'URL de la miniature par défaut
              alt={video.snippet.title}
            />
            <span className="videoTitle">{video.snippet.title}</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ResumeVideo;
