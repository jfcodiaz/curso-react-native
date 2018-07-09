import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class WelcomeScreen extends Component {
  static navigationOptions = {
    header: 'none'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> WelcomeScreen </Text>
        <Button title="Log in" onPress={()=> this.props.navigation.navigate('LoginScreen')}/>
        <Button title="Sing Up" onPress={()=> this.props.navigation.navigate('SingUpScreen')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});