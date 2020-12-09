import React from 'react';
import { View } from 'react-native';
import Map from '../../components/Map';
import styles from './styles';

const MainScreen = () => {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Map />
            </View>
        </View>
    );
}

export default MainScreen;