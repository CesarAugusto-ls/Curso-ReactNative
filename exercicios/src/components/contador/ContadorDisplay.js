import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Estilo from '../estilo'



const ContadorDisplay = (props) => {
    return (
        <View style={style.Display}>
            <Text style={[Estilo.txtMedium, style.DisplayText]}>
                {props.num}
            </Text>
        </View>
    )
}

export default ContadorDisplay;

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 24,
        width: 300
    },
    DisplayText: {
        color: '#FFF',
        textAlign: "center"

    }

})