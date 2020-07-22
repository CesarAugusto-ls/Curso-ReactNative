import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const style = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: '#000000',
        opacity: 0.6,
        alignItems: "flex-end",
    },
    displayValue: {
        fontSize: 60,
        color: '#fff'
    }
})

const Display = (props) => {
    return (
        <View style={style.display}>
            <Text
                style={style.displayValue}
                numberOfLines={1}
            >
                {props.value}
            </Text>
        </View>
    )
}

export default Display;