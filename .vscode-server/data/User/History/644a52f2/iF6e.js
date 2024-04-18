import React from 'react';

// Import local images
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

const images = [asm, cm63, fcl, fcm, fcn, hac, losc, mhsc, ogcn, ol, om, psg, rcl, rcsa, sb29, sdr, srfc];

const Equipetop = () => (
  <div style={styles.container}>
    {images.map((image, index) => (
      <img key={index} src={image} alt={`Team ${index + 1}`} style={styles.image} />
    ))}
  </div>
);

const styles = {
  container: {
    position: 'absolute',
    top: 35,
    width: '100%', // Make the band span the full width of the screen
    backgroundColor: '#CEFB03',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
  },
  image: {
    height: 'calc(100% - 10px)', // Make the images a bit smaller than the height of the band
    marginRight: 5,
  },
};

export default Equipetop;