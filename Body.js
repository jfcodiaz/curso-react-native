import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.numero}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#90EE90',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
