import React from 'react'
import { Text, TextInput, Button, View } from 'react-native'

import Estilo from '../estilo'
import MegaNumero from './MegaNumero'

export default class Mega extends React.Component {

    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }

    alterarQtdNumero = (novaQtd) => {
        this.setState({ qtdNumeros: +novaQtd })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    render() {

        return (
            <>
                <Text style={Estilo.txtLarge}>
                    Gerador Mega-Sena
                </Text>

                <TextInput
                    keyboardType={"numeric"}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Quatidade Numeros"
                    value={`${this.state.qtdNumeros}`}
                    onChangeText={this.alterarQtdNumero}
                />
                <Button
                    title="Gerar"
                    onPress={this.gerarNumeros}
                />
                <View style={{
                    marginTop: 20,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}