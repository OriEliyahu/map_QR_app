import React from 'react';
import MapboxGL, { MapView } from '@react-native-mapbox-gl/maps';
import MarkerPoint from '../MarkerPoint';
import styles from './styles';

MapboxGL.setAccessToken('pk.eyJ1Ijoib21lcnRhdm9ybWFwIiwiYSI6ImNraWg5ZmZtbDBmYnkzM28zdjJzaW93MzcifQ.eo0ZXB8ZY1hQ3GMp6gJjbA');
const Map = () => {
    return (
        <MapView
            onPress={(data) => { console.log(data) }}
            style={styles.map}
            logoEnabled={false}
            zoomEnabled={true} >
            <MarkerPoint x={400.9765625} y={295.953125} coordinate={[34.7795256888287, 32.079643620501926]} />
        </MapView>
    );
}

export default Map;