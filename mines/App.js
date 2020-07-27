import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import params from './src/params'

import Field from './src/components/Field'

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text>Iniciando o Mines</Text>
          <Text>
            Tamanho da grade: {params.getRowsAmount()}X{params.getColumnsAmount()}
          </Text>

          <Field />
          <Field opened />
          <Field opened nearMines={1} />
          <Field opened nearMines={2} />
          <Field opened nearMines={4} />
          <Field opened nearMines={6} />
          <Field mined />
          <Field mined opened />
          <Field mined opened exploded />
          <Field flagged />
          <Field flagged opened />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f5fcff'
  }
});

export default App;
