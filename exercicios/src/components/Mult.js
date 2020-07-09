import React from 'react'
import { Text } from 'react-native'

import Estilo from './estilo'


export default function Comp() {
    return <Text style={Estilo.txtMedium}>Comp #Oficial</Text>
}
export function Comp1() {
    return <Text style={Estilo}>Comp #01</Text>
}
export function Comp2() {
    return <Text style={Estilo.txtSmall}>Comp #02</Text>
}
