import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cajaUno}></View>
        <View style={styles.cajaDos}></View>
        <View style={styles.cajaTres}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cajaUno: {
    flex: 1,
    backgroundColor: '#00ff00',
  },
  cajaDos: {
    flex: 3,
    backgroundColor: '#90EE90',
  },
  cajaTres: {
    flex: 1,
    backgroundColor: '#006400',
  }
});
