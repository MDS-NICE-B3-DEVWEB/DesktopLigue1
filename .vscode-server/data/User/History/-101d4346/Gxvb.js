import React from 'react';
import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom pour créer des liens
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
import './HomePage.css';


function AccueilSceen() {
  return (
    <div className='ContainerHome'>
      <h1>Résumé de la Ligue 1</h1>
      <p>Un résumé des informations clés sur la Ligue 1 pourrait être placé ici. Cela pourrait inclure des détails sur les équipes participantes, les résultats récents, les classements, etc.</p>
      
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
  );
}

export default AccueilSceen;
