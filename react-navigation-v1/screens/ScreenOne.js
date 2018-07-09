import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class ScreenOne extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> ScreenOne </Text>
        <Button title="Log out" onPress={()=>
          this.props.screenProps.navigation.navigate('WelcomeScreen')
        }/>
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