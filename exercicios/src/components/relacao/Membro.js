import React from 'react';
import { Text } from 'react-native';

import Estilo from '../estilo'


const Membro = (props) => {
    return (
        <Text style={Estilo.txtLarge}>{props.nome} {props.sobrenome}</Text>
    )
}

export default Membro;