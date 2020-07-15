import React from 'react';
import { View, Text } from 'react-native';

import Estilo from './estilo'
import If from './If'

const UsuarioLogado = (props) => {
    const usuario = props.usuario || {}
    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={Estilo.txtLarge}>
                    Usuario logado:
                </Text>
                <Text style={Estilo.txtLarge}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}

export default UsuarioLogado;