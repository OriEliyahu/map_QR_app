import React, { useState } from 'react';
import MapboxGL, { MapView } from '@react-native-mapbox-gl/maps';
import MarkerPoint from '../MarkerPoint';
import styles from './styles';

MapboxGL.setAccessToken('pk.eyJ1Ijoib21lcnRhdm9ybWFwIiwiYSI6ImNraWg5ZmZtbDBmYnkzM28zdjJzaW93MzcifQ.eo0ZXB8ZY1hQ3GMp6gJjbA');
const Map = () => {
    const [markerPointsList, setMarkerPointsList] = useState([
        {
            x: 0,
            y: 0,
            coordinate: [0, 0],
            isTransparent: true
        }
    ]);

    const renderMarkerPointsList = (_markerPointsList) => {
        return _markerPointsList.map((markerPointItem, index) => {
            return (<MarkerPoint
                key={index}
                x={markerPointItem.x}
                y={markerPointItem.y}
                coordinate={markerPointItem.coordinate}
                isTransparent={markerPointItem.isTransparent}
            />)
        });
    }

    const addMarkerPoint = (markerGeoData) => {
        if (markerPointsList[0].isTransparent) {
            setMarkerPointsList([{
                x: markerGeoData.properties.screenPointX,
                y: markerGeoData.properties.screenPointY,
                coordinate: markerGeoData.geometry.coordinates
            }])
        }
        else {
            setMarkerPointsList([...markerPointsList,
            {
                x: markerGeoData.properties.screenPointX,
                y: markerGeoData.properties.screenPointY,
                coordinate: markerGeoData.geometry.coordinates
            }]);
        }
    }

    return (
        <MapView
            onLongPress={addMarkerPoint}
            style={styles.map}
            logoEnabled={false}
            zoomEnabled={true} >
            {renderMarkerPointsList(markerPointsList)}
        </MapView>
    );
}

export default Map;