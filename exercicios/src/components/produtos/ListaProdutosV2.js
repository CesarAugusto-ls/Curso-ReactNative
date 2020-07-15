import React from 'react';
import { Text, FlatList } from 'react-native';

import Estilo from '../estilo'

import produtos from './produtos'

const ListaProdutosV2 = () => {
    const produtoRender = ({ item: p }) => {
        return <Text style={Estilo.txtMedium}>{p.id}) {p.nome} / ${p.preco}</Text>
    }
    return (
        <>
            <Text style={Estilo.txtLarge}>Lista Produtos</Text>
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}
            />
        </>
    )
}

export default ListaProdutosV2;