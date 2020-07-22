import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
} from 'react-native';

import Button from './src/components/Button'
import Display from './src/components/Display'

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",

  }
})

const App = () => {

  const [displayValue, setDisplayValue] = React.useState('0')

  return (
    <>
      <SafeAreaView style={style.container}>
        <View style={style.container}>
          <Display value={displayValue} />
          <View style={style.buttons}>
            <Button onClick={{}} label="AC" />
            <Button onClick={{}} label="/" />
            <Button onClick={{}} label="7" />
            <Button onClick={{}} label="8" />
            <Button onClick={{}} label="9" />
            <Button onClick={{}} label="*" />
            <Button onClick={{}} label="4" />
            <Button onClick={{}} label="5" />
            <Button onClick={{}} label="6" />
            <Button onClick={{}} label="-" />
            <Button onClick={{}} label="1" />
            <Button onClick={{}} label="2" />
            <Button onClick={{}} label="3" />
            <Button onClick={{}} label="+" />
            <Button onClick={{}} label="0" />
            <Button onClick={{}} label="." />
            <Button onClick={{}} label="=" />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
