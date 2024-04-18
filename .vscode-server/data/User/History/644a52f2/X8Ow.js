import React from 'react';
import { Link } from 'react-router-dom';

// Importer les images locales
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
import ftc from '../../assets/img/ftc.png';

const images = [asm, cm63, fcl, fcm, fcn, ftc, hac, losc, mhsc, ogcn, ol, om, psg, rcl, rcsa, sb29, sdr, srfc];

const Equipetop = () => (
  <div style={styles.container}>
    {images.map((image, index) => (
      <Link key={index} to={`/ShowEquipe/${index + 1}`}>
        <img src={image} alt={`Team ${index + 1}`} style={styles.image} />
      </Link>
    ))}
  </div>
);

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    position: 'relative',
    top: 0,
    width: '100%',
    backgroundColor: '#CEFB03',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    zIndex: 1000,
    padding: '5px 0 5px 0',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 5,
    cursor: 'pointer', // Ajout d'un curseur pointer pour indiquer que l'image est cliquable
  },
};

export default Equipetop;
