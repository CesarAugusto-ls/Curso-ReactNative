import React from 'react';
import { Text } from 'react-native';

import Estilo from '../estilo'

import produtos from './produtos'

const ListaProdutos = () => {
    function obterLista() {
        return produtos.map(p => {
            return <Text key={p.id} style={Estilo.txtMedium}>{p.id}) {p.nome} / ${p.preco}</Text>
        })
    }
    return (
        <>
            <Text style={Estilo.txtLarge}>Lista Produtos</Text>
            {obterLista()}
        </>
    )
}

export default ListaProdutos;