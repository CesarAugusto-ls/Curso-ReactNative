import React from 'react';
import { StyleSheet, View } from 'react-native';


const FlexboxV4 = () => {
    return (
        <View style={style.FlexV4}>
            <View style={style.V} />
            <View style={style.V1} />
            <View style={style.V2} />
        </View>
    )
}

export default FlexboxV4;

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000',
    },
    V: {
        backgroundColor: '#36c9a7',
        height: 100,
    },
    V1: {
        backgroundColor: '#ff801a',
        flexGrow: 3,
    },
    V2: {
        backgroundColor: '#dd22c1',
        flexGrow: 1,

    }
})