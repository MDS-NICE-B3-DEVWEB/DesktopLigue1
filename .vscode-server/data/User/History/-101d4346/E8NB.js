// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import asm from '../../assets/img/asm.png'; 
import cm63 from '../../assets/img/cm63.png';
import fcl from '../../assets/img/fcl.png';
import fcm from '../../assets/img/fcm.png';
import fcn from '../../assets/img/fcn.png';
import hac from '../../assets/img/hac.png';
import losc from '../../assets/img/losc.png';
import mhsc from '../../assets/img/mhsc.png';
import ogcn from '../../assets/img/ogcn.png';
import ol from '../../assets/img/ol.png';
import om from '../../assets/img/om.png';
import psg from '../../assets/img/psg.png';
import rcl from '../../assets/img/rcl.png';
import rcsa from '../../assets/img/rcsa.png';
import sb29 from '../../assets/img/sb29.png';
import sdr from '../../assets/img/sdr.png';
import srfc from '../../assets/img/srfc.png';
import tfc from '../../assets/img/ftc.png';
import diapo1 from '../../assets/img/diapo1.jpg';
import diapo2 from '../../assets/img/diapo2.jpg';
import diapo3 from '../../assets/img/diapo3.jpg';
import diapo4 from '../../assets/img/diapo4.jpg';

import './HomePage.css';
import Slider from 'react-slick'; // Importer le composant Slider de react-slick
import 'slick-carousel/slick/slick.css'; // Importer les styles de react-slick
import 'slick-carousel/slick/slick-theme.css';

function AccueilSceen() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Afficher une seule image à la fois
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div>
       <div >
    <Slider {...settings}>
        <div>
          <img src={diapo1} alt="OM" />
        </div>
        <div>
          <img src={diapo2} alt="OGCN" />
        </div>
        <div>
          <img src={diapo3} alt="MONACO" />
        </div>
        <div>
          <img src={diapo4} alt="PSG" />
        </div>
      </Slider>
      </div>
      <div className='containerHome'>
      <div className='summary'>
        <div>
          <p>Le Championnat de France de Football, également connu sous le nom de Ligue 1, est la plus haute division du football français. Fondé en 1932, le championnat a connu une riche histoire et est considéré comme l'un des championnats nationaux les plus compétitifs d'Europe. Avec des clubs légendaires tels que le Paris Saint-Germain, l'Olympique de Marseille et l'Olympique Lyonnais, la Ligue 1 attire l'attention des amateurs de football du monde entier.
              Au fil des ans, le championnat a vu émerger des joueurs emblématiques tels que Zinedine Zidane, Thierry Henry et Michel Platini, qui ont contribué à façonner le football français et à élever le niveau de compétition. En plus de son histoire riche en talent, la Ligue 1 est également réputée pour ses clubs emblématiques, ses stades historiques et son atmosphère électrique lors des matches.
              Avec son système de promotion et de relégation, le championnat offre une lutte féroce pour le titre chaque saison, avec des équipes rivalisant pour décrocher le prestigieux trophée de champion de France. Le Championnat de France de Football continue d'attirer l'attention des médias internationaux et des amateurs de football, et reste un élément clé de la culture sportive </p>
        </div>
        <div>
          <img src={asm} alt="AS Monaco" />
        </div>
      </div>
      <div className='summary'>
        <div>
          <img src={cm63} alt="Clermont Foot" />
        </div>
        <div>
          <p>Le Championnat de France de Football ne se limite pas à être une compétition sportive de haut niveau, il joue également un rôle majeur dans l'économie et la culture françaises. Avec des millions de fans à travers le monde et des contrats de diffusion internationaux lucratifs, la Ligue 1 génère des revenus considérables pour les clubs, les sponsors et l'industrie du divertissement en général.
              En plus de son impact économique, la Ligue 1 contribue également à la richesse culturelle de la France. Les clubs de football sont souvent des symboles de fierté régionale, avec des supporters passionnés qui soutiennent leurs équipes à travers le pays. Les matches de football sont des événements sociaux majeurs, réunissant des personnes de tous âges et de tous horizons pour célébrer leur amour du jeu.
              De plus, le championnat offre une plateforme pour la diversité culturelle, avec des joueurs du monde entier représentant une variété de pays, de cultures et de traditions sur le terrain. Cela crée un environnement inclusif qui favorise l'échange culturel et renforce les liens entre les communautés locales et mondiales.</p>
        </div>
      </div>
      <h2>Liste des équipes</h2>
      <ul>
        <li>
        <a href="https://www.asmonaco.com/" target="_blank">
            <img src={asm} alt="AS Monaco" />
          </a>
          <a href="https://www.clermontfoot.com/" target="_blank">
            <img src={cm63} alt="Clermont Foot" />
          </a>
          <a href="https://www.fclorient.bzh/" target="_blank">
            <img src={fcl} alt="FC Lorient" />
          </a>
          <a href="https://www.fcmetz.com/" target="_blank">
            <img src={fcm} alt="FC Metz" />
          </a>
          <a href="https://www.fcnantes.com/#popupCookies" target="_blank">
            <img src={fcn} alt="FC Nantes" />
          </a>
          <a href="http://www.hac-foot.com/index.html" target="_blank">
            <img src={hac} alt="Havre AC" />
          </a>
          <a href="https://www.losc.fr/" target="_blank">
            <img src={losc} alt="LOSC Lille" />
          </a>
          <a href="https://www.mhscfoot.com/accueil" target="_blank">
            <img src={mhsc} alt="Montpellier HSC" />
          </a>
          <a href="https://www.ogcnice.com/fr/" target="_blank">
            <img src={ogcn} alt="OGC Nice" />
          </a>
          <a href="https://www.ol.fr/fr" target="_blank">
            <img src={ol} alt="Olympique Lyonnais" />
          </a>
          <a href="https://www.om.fr/fr" target="_blank">
            <img src={om} alt="Olympique de Marseille" />
          </a>
          <a href="https://www.psg.fr/" target="_blank">
            <img src={psg} alt="Paris Saint-Germain" />
          </a>
          <a href="https://www.rclens.fr/fr" target="_blank">
            <img src={rcl} alt="RC Lens" />
          </a>
          <a href="https://www.rcstrasbourgalsace.fr/" target="_blank">
            <img src={rcsa} alt="RC Strasbourg Alsace" />
           </a>
          <a href="https://www.sb29.bzh/" target="_blank">
            <img src={sb29} alt="Stade Brestois 29" />
          </a> 
          <a href="https://www.stade-de-reims.com/" target="_blank">
            <img src={sdr} alt="Stade de Reims" />
          </a>
          <a href="https://www.staderennais.com/" target="_blank">
            <img src={srfc} alt="Stade Rennais FC" />
          </a>
          <a href="https://www.toulousefc.com/" target="_blank">
            <img src={tfc} alt="Toulouse FC" />
          </a>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default AccueilSceen;