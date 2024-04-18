import React from 'react';
import { Button } from 'react-bootstrap'; // Remplacer le composant Button par l'équivalent de Bootstrap
import { ScrollView, Image, StyleSheet } from 'react-bootstrap'; // Remplacer ScrollView par un composant de défilement standard de Bootstrap

function AccueilScreen({ history }) {
  return (
    <div style={styles.container}>
      {/* Autres composants... */}
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#02153C', // Définir la couleur de fond ici
  },
  // Autres styles...
};

export default AccueilScreen;
