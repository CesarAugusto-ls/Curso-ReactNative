import React from 'react';
import { Text } from 'react-native';

import Estilo from '../estilo'

const Filho = (props) => {
    return (
        <>
            <Text style={Estilo.txtMedium}>{props.a}</Text>
            <Text style={Estilo.txtMedium}>{props.b}</Text>
        </>
    );
}

export default Filho;