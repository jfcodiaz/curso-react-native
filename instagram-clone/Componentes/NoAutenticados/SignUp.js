import {
  View, Text, Button, TextInput, StyleSheet,
} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUpForm from './Formas/SignUpForm';


class SignUp extends Component {
  registroDeUsuario = (values) => {
    console.log(values);
    this.props.registro(values);
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SignUpForm registro={this.registroDeUsuario} />
        <Button title="Regresar" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}
const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => ({
  registro: (values) => {
    dispatch({ type: 'REGISTRO', datos: values });
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
