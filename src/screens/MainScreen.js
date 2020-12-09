import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Map from '../components/Map';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MainScreen = () => {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Map />
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
        width: (windowWidth * 0.9999),
    }
});

export default MainScreen;