import React from 'react';
import { View, StyleSheet } from 'react-native';
import Field from './Field';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
    },
    columns: {
        flexDirection: "row",
    }
})

const MineField = (props) => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} key={c}
                onOpen={() => props.onOpenField(r, c)}
                onSelect={() => props.onSelectField(r, c)}
            />
        })
        return <View key={r} style={styles.columns}>{columns}</View>
    })

    return (
        <View style={styles.container}>
            {rows}
        </View>
    )
}

export default MineField;