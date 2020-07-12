import React from 'react';
import { Button, View, StyleSheet } from 'react-native';


const ContadorBotoes = (props) => {
    return (
        <View style={style.Botoes}>
            <Button title="+" onPress={props.inc} />
            <Button title="-" onPress={props.dec} />
        </View>
    )
}

export default ContadorBotoes;

const style = StyleSheet.create({
    Botoes: {
        flexDirection: "row"
    }
})