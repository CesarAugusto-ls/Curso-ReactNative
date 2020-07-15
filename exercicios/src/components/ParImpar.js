import React from 'react';
import { Text, View } from 'react-native';

import Estilo from './estilo'

const ParImpar = (props) => {
    return (
        <View>
            <Text style={Estilo.txtLarge}>Resultado é:</Text>
            {props.num % 2 === 0
                ? <Text style={Estilo.txtLarge}>Par</Text>
                : <Text style={Estilo.txtLarge}>Impar</Text>

            }
        </View>
    )
}

export default ParImpar;