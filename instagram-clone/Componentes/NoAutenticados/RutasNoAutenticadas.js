import { createStackNavigator } from 'react-navigation';
import { View, Text, Button } from 'react-native';
import React from 'react';
import SignIn from './SignIn';

const SignUp = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <Text>SignUp</Text>
    <Button title="Regresar" onPress={() => navigation.goBack()} />
  </View>
);
const RutasNoAutenticadas = createStackNavigator({
  SignIn,
  SignUp,
}, {
  headerMode: 'none',
});

export { RutasNoAutenticadas };
