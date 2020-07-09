import React from 'react';
import { Button } from 'react-native';

const Botao = () => {

    function executar() {
        console.warn('Exec #01')
    }

    return (
        <>
            <Button
                title="Executar #01"
                onPress={executar}
            />
            <Button
                title="Executar #02"
                onPress={() => console.warn('Exec #02')}
            />
        </>
    )
}

export default Botao;