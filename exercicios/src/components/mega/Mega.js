import React from 'react'
import { Text, TextInput } from 'react-native'

import Estilo from '../estilo'

export default class Mega extends React.Component {

    state = {
        qtdNumeros: this.props.qtdNumeros
    }

    alterarQtdNumero = (novaQtd) => {
        this.setState({ qtdNumeros: novaQtd })
    }

    render() {

        return (
            <>
                <Text style={Estilo.txtLarge}>
                    Gerador Mega-Sena {this.state.qtdNumeros}
                </Text>

                <TextInput
                    keyboardType={"numeric"}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Quatidade Numeros"
                    value={this.state.qtdNumeros}
                    onChangeText={this.alterarQtdNumero}
                />
            </>
        )
    }
}