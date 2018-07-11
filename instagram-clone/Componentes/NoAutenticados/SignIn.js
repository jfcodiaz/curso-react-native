import {
  View, Button, StyleSheet,
} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignInForm from './Formas/SignInForm';

class SignIn extends Component{
  signinDeUsuario = (values) => {
    this.props.login(values);
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SignInForm login={this.signinDeUsuario}/> 
        <Button title="SingUp" onPress={() => navigation.navigate('SignUp')} />
      </View>);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
  },
});

const mapStateToProps = state => ({
  prop: state.prop,
});

const mapDispatchToProps = dispatch => ({
  login: (datos) => {
    dispatch({ type: 'LOGIN', datos });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
