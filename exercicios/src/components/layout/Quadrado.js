import React from 'react';
import { View } from 'react-native';


const Quadrado = (props) => {
    const lado = props.lado || 50
    return (
        <View style={{
            height: lado,
            width: lado,
            backgroundColor: props.cor || '#000'
        }}>
        </View>
    )
}

export default Quadrado;