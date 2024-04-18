import React from 'react';

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

const images = [asm, cm63, fcl, fcm, fcn, hac, losc, mhsc, ogcn, ol, om, psg, rcl, rcsa, sb29, sdr, srfc];

const Equipetop = () => (
  <div 
    style={styles.container} 
  >
    {images.map((image, index) => (
      <img key={index} src={image} alt={`Team ${index + 1}`} style={styles.image} />
    ))}
  </div>
);

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-around', 
        position: 'fixed', // Changed from 'absolute' to 'fixed'
        top: 0, // Changed from 35 to 0 to stick to the top of the page
        width: '100%', // Make the band span the full width of the screen
        backgroundColor: '#CEFB03',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        zIndex: 1000, // Add a zIndex to make sure it stays on top of other content
  },
  image: {
    width: 50, // Vous pouvez ajuster la largeur et la hauteur comme vous le souhaitez
    height: 50,
    marginRight: 5, // Ajout de marge entre les images
  },
};

export default Equipetop;
