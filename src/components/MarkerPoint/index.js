import React from 'react';
import { MarkerView } from '@react-native-mapbox-gl/maps';
import { Image } from 'react-native';
import pointMarkerSource from '../../assets/MarkerLogo.png';
import styles from './styles';

const MarkerPoint = (props) => {

    const x = props.x;
    const y = props.y;
    const coordinate = props.coordinate;

    return (
        <MarkerView
            coordinate={coordinate}
            x={x}
            y={y}
            children={<Image style={styles.Marker} source={pointMarkerSource} />}
        />
    );
}

export default MarkerPoint;