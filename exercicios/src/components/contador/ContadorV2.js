import React from 'react';
import { Text } from 'react-native';

import ContadorDisplay from './ContadorDisplay'
import ContadorBotoes from './ContadorBotoes'
import Estilo from '../estilo'

const ContadorV2 = (props) => {

    const [num, setNum] = React.useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return (
        <>
            <Text style={Estilo.txtMedium}>Contador V2</Text>
            <ContadorDisplay num={num} />
            <ContadorBotoes inc={inc} dec={dec} />
        </>
    )
}

export default ContadorV2;