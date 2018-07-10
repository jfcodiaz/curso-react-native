import { View, Text, Button } from 'react-native';
import React, { Component } from 'react';

const SignIn = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <Text>Sing In </Text>
    <Button title="SingUp" onPress={() => navigation.navigate('SignUp')} />
  </View>);
export default SignIn;
