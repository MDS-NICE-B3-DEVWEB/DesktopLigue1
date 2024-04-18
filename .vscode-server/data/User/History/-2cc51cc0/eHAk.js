import React from 'react';
import './Equipe.css';

// Importez les images locales
import asmLogo from '../as/img/asm.png'; 
import cm63Logo from './img/cm63.png';
import fclLogo from './img/fcl.png';
import fcmLogo from './img/fcm.png';
import fcnLogo from './img/fcn.png';
import hacLogo from './img/hac.png';
import loscLogo from './img/losc.png';
import mhscLogo from './img/mhsc.png';
import ogcnLogo from './img/ogcn.png';
import olLogo from './img/ol.png';
import omLogo from './img/om.png';
import psgLogo from './img/psg.png';
import rclLogo from './img/rcl.png';
import rcsaLogo from './img/rcsa.png';
import sb29Logo from './img/sb29.png';
import sdrLogo from './img/sdr.png';
import srfcLogo from './img/srfc.png';
import tfcLogo from './img/tfc.png';
// Importez les autres logos ici...

const Equipe = () => {

  const handleTeamPress = (id_equipe) => {
    // navigation.navigate('ShowTeam', { id_equipe: id_equipe });
    // Remplacez cette ligne par votre logique de navigation
  };

  return (
    <div className="container">
      <button onClick={() => handleTeamPress(76)} className="teamContainer" style={{backgroundColor: '#db0632'}}>
        <img src={asmLogo} className="teamLogo" alt="ASM" />
        <p className="teamName">ASM</p>
      </button>
      // Continuez avec les autres équipes...
    </div>
  );
};

export default Equipe;