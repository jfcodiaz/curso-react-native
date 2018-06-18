import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.texto}
          placeholder="Aquí escribe tu text..."
          onChangeText={this.props.cambiarTexto}
          onSubmitEditing={this.props.agregar}
          value={this.props.texto}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FF00',
    justifyContent: 'center',
  },
  texto: {
    paddingHorizontal: 16,
    fontSize: 24,
  },
});
