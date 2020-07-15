import React from 'react';
import { View, TextInput } from 'react-native';


const DigiteSeuNome = () => {
    const [nome, setNome] = React.useState('')
    return (
        <View>
            <TextInput
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={txt => setNome(txt)}
            />
        </View>
    )
}

export default DigiteSeuNome;