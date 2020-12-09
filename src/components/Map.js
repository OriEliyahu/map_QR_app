import React from 'react';
import { StyleSheet } from 'react-native';
import MapboxGL, { MapView } from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('pk.eyJ1Ijoib21lcnRhdm9ybWFwIiwiYSI6ImNraWg5ZmZtbDBmYnkzM28zdjJzaW93MzcifQ.eo0ZXB8ZY1hQ3GMp6gJjbA');
const Map = () => {
    return (
        <MapView
            onPress={(data) => { console.log(data) }}
            style={styles.map}
            logoEnabled={false}
            zoomEnabled={true} />
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});

export default Map;