import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Estilo from './estilo'

const Titulo = (props) => {
    return (
        <React.Fragment>
            <Text style={Estilo.txtLarge}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </React.Fragment>
    )
}

export default Titulo;