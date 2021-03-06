import React from 'react';
import { Button } from 'react-native';

const Filho = (props) => {

    function gerarNumero(min, max) {
        return Math.floor(Math.random() * (max + 1) + min);
    }

    return (
        <Button
            title="Executar"
            onPress={function () {
                const n = gerarNumero(props.min, props.max)
                props.funcao(n)
            }}
        />
    )
}

export default Filho;