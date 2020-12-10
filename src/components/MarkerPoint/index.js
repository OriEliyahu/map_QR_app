import React, { useState } from 'react';
import { MarkerView } from '@react-native-mapbox-gl/maps';

import { Image, TouchableOpacity, View, Modal, Text } from 'react-native';

import pointMarkerSource from '../../assets/MarkerLogo.png';
import QRCode from 'react-native-qrcode-svg';
import styles from './styles';


const MarkerPoint = (props) => {
    const [visible, setVisble] = useState(false);

    const x = props.x;
    const y = props.y;
    const coordinate = props.coordinate;

    const getChildren = () => {
        return (
            <View onStartShouldSetResponder={() => setVisble(true)}>
                <Image style={styles.Marker} source={pointMarkerSource} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* 
            <Modal
                visible={visible}
                animationType={'slide'}
                onRequestClose={() => alert('close')}
                transparent={false}>

                <View style={styles.Code}>

                    <QRCode value={`WELCOME TO ${coordinate}`} />

                    <Text
                        style={styles.closeText}
                        onPress={() => setVisble(false)}>
                        Close Modal
                    </Text>
                </View>
            </Modal> */}

      <MarkerView
            coordinate={coordinate}
            x={x}
            y={y}
            children={props.isTransparent === true ? <View/> : <Image style={styles.Marker} source={pointMarkerSource} />}
        />
        </View>
    );
}

export default MarkerPoint;