import React from 'react';
import { Text } from 'react-native';

import Filho from './Filho'

const Pai = () => {

    const [num, setNum] = React.useState(0)
    function exibirValor(numero) {
        setNum(numero)
    }

    return (
        <>
            <Filho
                funcao={exibirValor}
                min={1}
                max={60}
            />
            <Text>{num}</Text>
        </>
    )
}

export default Pai;