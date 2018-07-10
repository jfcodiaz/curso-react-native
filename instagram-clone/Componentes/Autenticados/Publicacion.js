import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';

const Publicacion = ({ navigation }) => (
  <View style={styles.container}>
    <Text> Publicacion </Text>
    <Button
      title="Comentario"
      onPress={() => navigation.navigate('Comentarios')}
    />
    <Button
      title="Autor"
      onPress={() => navigation.navigate('Autor')}
    />
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default Publicacion;
