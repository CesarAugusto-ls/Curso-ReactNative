import React from 'react';
import { StyleSheet, View } from 'react-native';
import Quadrado from './Quadrado';


const FlexboxV1 = () => {
    return (
        <View style={style.FlexV1}>
            <Quadrado cor="#ff801a" />
            <Quadrado cor="#50d1f6" />
            <Quadrado cor="#dd2201" />
            <Quadrado cor="#8312dd" />
            <Quadrado cor="#36c9a7" />
        </View>
    )
}

export default FlexboxV1;

const style = StyleSheet.create({
    FlexV1: {
        backgroundColor: '#000',
        flexGrow: 1,
        justifyContent: "space-evenly"
    }
})