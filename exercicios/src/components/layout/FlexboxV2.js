import React from 'react';
import { StyleSheet, View } from 'react-native';
import Quadrado from './Quadrado';


const FlexboxV2 = () => {
    return (
        <View style={style.FlexV2}>
            <Quadrado cor="#ff801a" />
            <Quadrado cor="#50d1f6" />
            <Quadrado cor="#dd2201" />
            <Quadrado cor="#8312dd" />
            <Quadrado cor="#36c9a7" />
        </View>
    )
}

export default FlexboxV2;

const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width: '100%',
        backgroundColor: '#000',
        justifyContent: "space-evenly",
        alignItems: "flex-end"
    }
})