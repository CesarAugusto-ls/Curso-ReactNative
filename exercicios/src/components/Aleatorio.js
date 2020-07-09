import React from 'react';
import { Text } from 'react-native';

import Estilo from './estilo'

const Aleatorio = (props) => {

    const numAleatorio = Math.floor(Math.random() * (props.max + 1) + props.min);

    return (
        <Text style={Estilo.txtMedium}>Numero aleatorio gerado: {numAleatorio}</Text>
    )
}

export default Aleatorio;