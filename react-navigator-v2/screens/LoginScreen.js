import {
  View, Text, StyleSheet, Button
} from 'react-native';
import React from 'react'
class LoginScreen extends React.Component {
  static navigationOptions = {
    header:null
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>LoginScreen</Text>
        <Button title="Go to Home Scrren" 
          onPress={()=> this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor : '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});