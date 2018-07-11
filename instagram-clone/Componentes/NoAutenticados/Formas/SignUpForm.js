import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput, Button,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';


const fieldNombre = props => (
  <View style={styles.textInput}>
    <TextInput
      placeholder={props.ph}
      onChangeText={props.input.onChange}
      value={props.input.value}
      keyboardType={props.input.name === 'correo' ? 'email-address' : 'default'}
      autoCapitalize="none"
      secureTextEntry={props.input.name === 'password' || props.input.name === 'confirmacion'}
      onBlur={props.input.onBlur}
    />
    <View style={styles.linea} />
    { props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}

  </View>
);

const validate = (values) => {
  const errors = {};
  if (!values.nombre) {
    errors.nombre = 'requerido';
  } else if (values.nombre.length < 5) {
    errors.nombre = 'debe de ser al menos 5 caracteres';
  } else if (values.nombre.length > 10) {
    errors.nombre = 'debe de ser menor de 10 caracteres';
  }
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!values.correo) {
    errors.correo = 'requerido';
  } else if (!re.test(values.correo)) {
    errors.correo = 'Correo No valido';
  }

  if (!values.password) {
    errors.password = 'requerido';
  } else if (values.password.length < 5) {
    errors.password = 'debe de ser al menos 5 caracteres';
  } else if (values.password.length > 10) {
    errors.password = 'debe de ser menor de 10 caracteres';
  }

  if (!values.confirmacion) {
    errors.confirmacion = 'requerido';
  } else if (values.password !== values.confirmacion) {
    errors.confirmacion = 'El password desbe de coincidir';
  }


  return errors;
};
const SignUpForm = props => (
  <View>
    <Field name="nombre" component={fieldNombre} ph="Nombre" />
    <Field name="correo" component={fieldNombre} ph="correo@correo.com" />
    <Field name="password" component={fieldNombre} ph="*******" />
    <Field name="confirmacion" component={fieldNombre} ph="*******" />
    <Button
      title="Registrar"
      onPress={props.handleSubmit(props.registro)}
    />

  </View>
);

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 16,
  },
  linea: {
    backgroundColor: '#DCDCDC',
    height: 2,
  },
  errors: {
    color: '#FF0000',
  },
});
export default reduxForm({
  form: 'SignUpForm',
  validate,
})(SignUpForm);
