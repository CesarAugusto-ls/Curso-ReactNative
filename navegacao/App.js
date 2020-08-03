import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import TelaA from './src/views/TelaA';
import TelaB from './src/views/TelaB';
import TelaC from './src/views/TelaC';

const App = (props) => {
  return (
    <>
      <SafeAreaView />
      <SafeAreaView style={{ flex: 1 }}>
        <TelaA />
        <TelaB />
        <TelaC />
      </SafeAreaView>
    </>
  );
};

export default App;
