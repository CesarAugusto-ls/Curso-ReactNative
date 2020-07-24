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

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text>Iniciando o Mines</Text>
          <Text>
            Tamanho da grade: {params.getRowsAmount()}X{params.getColumnsAmount()}
          </Text>
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
