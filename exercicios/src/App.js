import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

// import CompOficial, { Comp1, Comp2 } from './components/Mult'
// import Primeiro from './components/Primeiro'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import Contator from './components/Contador'
// import PaiDireta from './components/direta/Pai'
// import PaiIndireta from './components/indireta/Pai'
// import ContadorV2 from './components/contador/ContadorV2'
import DiferenciarPlataforma from './components/DiferenciarPlataforma'

export default function App() {

    return (
        <SafeAreaView style={style.App}>
            <DiferenciarPlataforma />
            {/* 
            <ContadorV2 />
            <PaiIndireta />
            <PaiDireta />
            <Contator inicial={10} />
            <Botao />
            <Titulo
                principal={"Cadastro Produto"}
                secundario={"Tela de cadastro do produto"}
            />
            <Aleatorio min={1} max={60} />
            <MinMax min={3} max={5}/>
            <Primeiro />
            <CompOficial />
            <Comp1 />
            <Comp2 /> 
            */}
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})