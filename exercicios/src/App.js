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
// import DiferenciarPlataforma from './components/DiferenciarPlataforma'
// import ParImpar from './components/ParImpar'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
// import UsuarioLogado from './components/UsuarioLogado'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import Quadrado from './components/layout/Quadrado'
// import FlexboxV1 from './components/layout/FlexboxV1'
import FlexboxV2 from './components/layout/FlexboxV2'

export default function App() {

    return (
        <SafeAreaView style={style.App}>
            <FlexboxV2 />
            {/* 
            <FlexboxV1 />
            <DigiteSeuNome />
            <ListaProdutosV2 />
            <ListaProdutos />
            <UsuarioLogado usuario={{ nome: 'Cesar', email: 'cesar@teste.com' }} />
            <Familia>
                <Membro nome="Cesar" sobrenome="Augusto" />
            </Familia>
            <ParImpar num={20} />
            <DiferenciarPlataforma />
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