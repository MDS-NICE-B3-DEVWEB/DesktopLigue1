import React from 'react';
import './Equipe.css';
import { Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

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

  const handleTeamPress = (id_equipe) => {
    // Remplacez cette ligne par votre logique de navigation
  };

  return (
    <div className="containerallteam">
      <Link to="/ShowEquipe/76" className="teamContainer" style={{backgroundColor: '#db0632'}}>
        <img src={asmLogo} className="teamLogo" alt="ASM" />
        <p className="teamName style={{color: '#02153C'}}">ASM</p>
      </Link>
      <Link to="/ShowEquipe/622" className="teamContainer" style={{backgroundColor: '#002d6a'}}>
        <img src={cm63Logo} className="teamLogo" alt="CM63" />
        <p className="teamName"style={{color: '#fff'}}>CM63</p>
      </Link>
      <Link to="/ShowEquipe/545" className="teamContainer" style={{backgroundColor: '#FF4A00'}}>
        <img src={fclLogo} className="teamLogo" alt="FCL" />
        <p className="teamName" style={{color: '#02153C'}}>FCL</p>
      </Link>
      <Link to="/ShowEquipe/120" className="teamContainer" style={{backgroundColor: '#ffffff'}}>
        <img src={fcmLogo} className="teamLogo" alt="FCM" />
        <p className="teamName" style={{color: '#02153C'}}>FCM</p>
      </Link>
      <Link to="/ShowEquipe/60" className="teamContainer" style={{backgroundColor: '#00a558'}}>
        <img src={fcnLogo} className="teamLogo" alt="FCN" />
        <p className="teamName" style={{color: '#02153C'}}>FCN</p>
      </Link>
      <Link to="/ShowEquipe/625" className="teamContainer" style={{backgroundColor: '#8cc2e6'}}>
        <img src={hacLogo} className="teamLogo" alt="HAC" />
        <p className="teamName" style={{color: '#02153C'}}>HAC</p>
      </Link>
      <Link to="/ShowEquipe/69" className="teamContainer" style={{backgroundColor: '#e41b13'}}>
        <img src={loscLogo} className="teamLogo" alt="LOSC" />
        <p className="teamName" style={{color: '#02153C'}}>LOSC</p>
      </Link>
      <Link to="/ShowEquipe/65" className="teamContainer" style={{backgroundColor: '#07195E'}}>
        <img src={mhscLogo} className="teamLogo" alt="MHSC" />
        <p className="teamName" style={{color: '#fff'}}>MHSC</p>
      </Link>
      <Link to="/ShowEquipe/64" className="teamContainer" style={{backgroundColor: '#D52027'}}>
        <img src={ogcnLogo} className="teamLogo" alt="OGCN" />
        <p className="teamName" style={{color: '#02153C'}}>OGCN</p>
      </Link>
      <Link to="/ShowEquipe/59" className="teamContainer" style={{backgroundColor: '#ffffff'}}>
        <img src={omLogo} className="teamLogo" alt="OM" />
        <p className="teamName" style={{color: '#02153C'}}>OM</p>
      </Link>
      <Link to="/ShowEquipe/61" className="teamContainer" style={{backgroundColor: '#0F23AA'}}>
        <img src={olLogo} className="teamLogo" alt="OL" />
        <p className="teamName" style={{color: '#fff'}}>OL</p>
      </Link>
      <Link to="/ShowEquipe/66" className="teamContainer" style={{backgroundColor: '#ffffff'}}>
        <img src={psgLogo} className="teamLogo" alt="PSG" />
        <p className="teamName" style={{color: '#02153C'}}>PSG</p>
      </Link>
      <Link to="/ShowEquipe/546" className="teamContainer" style={{backgroundColor: '#f6d410'}}>
        <img src={rclLogo} className="teamLogo" alt="RCL" />
        <p className="teamName" style={{color: '#02153C'}}>RCL</p>
      </Link>
      <Link to="/ShowEquipe/68" className="teamContainer" style={{backgroundColor: '#009ee2'}}>
        <img src={rcsaLogo} className="teamLogo" alt="RCSA" />
        <p className="teamName" style={{color: '#02153C'}}>RCSA</p>
      </Link>
      <Link to="/ShowEquipe/121" className="teamContainer" style={{backgroundColor: '#e41a25'}}>
        <img src={sb29Logo} className="teamLogo" alt="SB29" />
        <p className="teamName" style={{color: '#02153C'}}>SB29</p>
      </Link>
      <Link to="/ShowEquipe/72" className="teamContainer" style={{backgroundColor: '#ffffff'}}>
        <img src={sdrLogo}  className="teamLogo" alt="SDR" />
        <p className="teamName"  style={{color: '#02153C'}}>SDR</p>
      </Link>
      <Link to="/ShowEquipe/67" className="teamContainer" style={{backgroundColor: '#d82626'}}>
        <img src={srfcLogo} className="teamLogo" alt="SRFC" />
        <p className="teamName" style={{color: '#02153C'}}>SRFC</p>
      </Link>
      <Link to="/ShowEquipe/63" className="teamContainer" style={{backgroundColor: '#3e2b57'}}>
        <img src={tfcLogo} className="teamLogo" alt="TFC" />
        <p className="teamName" style={{color: '#02153C'}}>TFC</p>
      </Link>
    </div>
  );
};

export default Equipe;
