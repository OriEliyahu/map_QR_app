import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

MapboxGL.setAccessToken('pk.eyJ1Ijoib21lcnRhdm9ybWFwIiwiYSI6ImNraWg5ZmZtbDBmYnkzM28zdjJzaW93MzcifQ.eo0ZXB8ZY1hQ3GMp6gJjbA');

const App = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
         <MapboxGL.MapView style={styles.map} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    height: (windowHeight * 0.97),
    width: (windowWidth * 0.9999)
  },
  map: {
    flex: 1
  }
});

export default App;