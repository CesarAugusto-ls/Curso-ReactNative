import React from 'react'
import { Text } from 'react-native'

import Estilo from './estilo'

export default function MinMax(props) {

    return (
        <Text style={Estilo.txtMedium}>
            O valor de {props.max} é maior que o valor de {props.min}
        </Text>
    )
}
