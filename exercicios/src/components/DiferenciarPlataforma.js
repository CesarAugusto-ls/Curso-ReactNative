import React from 'react';
import { Text, Platform } from 'react-native';

import Estilo from './estilo'

const DiferenciarPlataforma = () => {
    if (Platform.OS === 'android') {
        return <Text style={Estilo.txtLarge}>Android</Text>
    } else if (Platform.OS === 'ios') {
        return <Text style={Estilo.txtLarge}>IOS</Text>
    } else {
        return <Text style={Estilo.txtLarge}>EITA !!!</Text>

    }
}

export default DiferenciarPlataforma;