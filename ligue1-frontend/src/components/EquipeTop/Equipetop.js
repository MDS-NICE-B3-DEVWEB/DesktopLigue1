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
import tfc from '../../assets/img/ftc.png';

const images = [asm, cm63, fcl, fcm, fcn,  hac, losc, mhsc, ogcn, om, ol, psg, rcl, rcsa, sb29, sdr, srfc, tfc];
const teamIds = [76, 622, 545, 120, 60, 625, 69, 65, 64, 59, 61, 66, 546, 68, 121, 72, 67, 63];

const Equipetop = () => (
  <div style={styles.container}>
    {images.map((image, index) => (
      <Link key={index} to={`/ShowEquipe/${teamIds[index]}`} style={styles.link}>
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
  },
  link: {
    textDecoration: 'none',
  },
};

export default Equipetop;
