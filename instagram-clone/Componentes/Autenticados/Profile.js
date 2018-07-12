import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';
import { autenticacion } from '../../Store/Servicios/Firebase';

const Profile = ({ navigation }) => (
  <View style={styles.container}>
    <Text> Profile </Text>
    <Button title="Publicacion" onPress={() => navigation.navigate('Publicacion')} />
    <Button title="Salir" onPress={() => autenticacion.signOut()} />
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

export default Profile;
