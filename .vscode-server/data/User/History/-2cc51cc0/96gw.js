import React from 'react';
import './Equipe.css';

// Importez les images locales
import asmLogo from '../../assets/img/asm.png'; 
import cm63Logo from '../../assets/img/cm63.png';
import fclLogo from '../../assets/img/fcl.png';
import fcmLogo from '../../assets/img/fcm.png';
import fcnLogo from '../../assets/img/fcn.png';
import hacLogo from 'hac.png';
import loscLogo from '../../assets/losc.png';
import mhscLogo from '../../assets/mhsc.png';
import ogcnLogo from '../../assets/ogcn.png';
import olLogo from '../../assets/ol.png';
import omLogo from '../../assets/om.png';
import psgLogo from '../../assets/psg.png';
import rclLogo from '../../assets/rcl.png';
import rcsaLogo from 'rcsa.png';
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