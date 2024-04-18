import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import ClassementScreen from './ClassementScreen';

const { height } = Dimensions.get('window');

function AccueilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.classementContainer}>
        {/* Retirez le texte du composant ClassementScreen */}
        <ClassementScreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#02153C',
  },
  classementContainer: {
    height: height / 2, // La moitié de la hauteur de l'écran
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
});

export default AccueilScreen;
