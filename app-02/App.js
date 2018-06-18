import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Button } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: '',
      cargando: true,
    };
  }
  componentDidMount() {
    this.recuperDelTelefono();
  }
  agregarTarea = () => {
    const tareas = [...this.state.tareas, {
      texto: this.state.texto,
      key: Date.now().toString(),
    }];
    this.guardarEnElTelefono(tareas);
    this.setState({
      tareas,
      texto: '',
    });
  }
  establecerTexto = (value) => {
    this.setState({ texto: value });
  }
  eliminarTarea = (id) => {
    const nuevasTareas = this.state.tareas.filter(tarea => tarea.key !== id);
    this.guardarEnElTelefono(nuevasTareas);
    this.setState({
      tareas: nuevasTareas,
    });
  }
  guardarEnElTelefono = (tareas) => {
    AsyncStorage.setItem('@AppCursoUdemy:tareas', JSON.stringify(tareas))
      .then((valor) => {
        console.log(valor);
      }).catch((error) => {
        console.log(error);
      });
  }

  recuperDelTelefono = () => {
    AsyncStorage.getItem('@AppCursoUdemy:tareas').then((valor) => {
      let tareas = JSON.parse(valor);
      if (!tareas) {
        tareas = [];
      }
      this.setState({
        tareas,
        cargando: false,
      });
    }).catch((error) => {
      console.log(error);
      this.setState({
        cargando: false,
      });
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          cambiarTexto={this.establecerTexto}
          agregar={this.agregarTarea}
          texto={this.state.texto}
        />
        <Body
          tareas={this.state.tareas}
          eliminar={this.eliminarTarea}
          cargando={this.state.cargando}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
