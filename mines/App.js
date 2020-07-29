import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Alert,
} from 'react-native';

import params from './src/params'
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hasExplosion,
  wonGame,
  showMines,
} from './src/logics'
import MineField from './src/components/MineField';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return Math.ceil((cols * rows) * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)

    const lost = hasExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Perdeu', 'Errrrrrrou')
    }

    if (won) {
      Alert.alert('Parabens', 'Voce venceu')
    }

    this.setState({ board, lost, won })
  }

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>

            <Text>Iniciando o Mines</Text>
            <Text>
              Tamanho da grade: {params.getRowsAmount()}X{params.getColumnsAmount()}
            </Text>

            <View style={styles.board}>
              <MineField
                board={this.state.board}
                onOpenField={this.onOpenField}
              />
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  board: {
    alignItems: "center",
    backgroundColor: '#AAA'
  },
});

export default App;
