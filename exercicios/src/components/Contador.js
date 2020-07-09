import React from 'react';
import { Text, Button } from 'react-native';
import Estilo from './estilo'

const Contador = (props) => {
    const [numero, setNumero] = React.useState(props.inicial)

    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)

    return (
        <>
            <Text style={Estilo.txtLarge}>{numero}</Text>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec} />
        </>
    )
}

export default Contador;