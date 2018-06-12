import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Inicio extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Inicio</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
