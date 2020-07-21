import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Estilo from '../estilo'

const MegaNumero = ({ num }) => {
    return (
        <View style={style.Container}>
            <Text style={[Estilo.txtLarge, style.Numero]}>
                {num}
            </Text>
        </View>
    )
}

export default MegaNumero;

const style = StyleSheet.create({
    Container: {
        backgroundColor: '#000',
        height: 48,
        width: 48,
        margin: 4,
        borderRadius: 24
    },
    Numero: {
        color: '#FFF'
    }
})