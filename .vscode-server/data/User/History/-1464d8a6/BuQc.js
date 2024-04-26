import React from 'react';
import './Equipe.css';
import { Link } from 'react-router-dom';

import asmLogo from '../../assets/img/asm.png'; 
import cm63Logo from '../../assets/img/cm63.png';
import fclLogo from '../../assets/img/fcl.png';
import fcmLogo from '../../assets/img/fcm.png';
import fcnLogo from '../../assets/img/fcn.png';
import hacLogo from '../../assets/img/hac.png';
import loscLogo from '../../assets/img/losc.png';
import mhscLogo from '../../assets/img/mhsc.png';
import ogcnLogo from '../../assets/img/ogcn.png';
import olLogo from '../../assets/img/ol.png';
import omLogo from '../../assets/img/om.png';
import psgLogo from '../../assets/img/psg.png';
import rclLogo from '../../assets/img/rcl.png';
import rcsaLogo from '../../assets/img/rcsa.png';
import sb29Logo from '../../assets/img/sb29.png';
import sdrLogo from '../../assets/img/sdr.png';
import srfcLogo from '../../assets/img/srfc.png';
import tfcLogo from '../../assets/img/ftc.png';

const Equipe = () => {


  return (
    <div className="containerallteam">
      {equipes.map((equipe, index) => (
        <Link key={index} to={`/ShowEquipe/${equipe.id}`} className="teamContainer" style={{backgroundColor: '#db0632'}}>
          <img src={equipe.logo} className="teamLogo" alt={equipe.nom} />
          <p className="teamName">{equipe.nom}</p>
        </Link>
      ))}
    </div>
  );
};

export default Equipe;
