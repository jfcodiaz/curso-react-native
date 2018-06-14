import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: '',
    };
  }

  agregarTarea = () => {
    this.setState({
      tareas: [...this.state.tareas, {
        texto: this.state.texto,
        key: Date.now().toString(),
      }],
      texto: '',
    });
  }
  establecerTexto = (value) => {
    this.setState({ texto: value });
  }
  eliminarTarea = (id) => {
    const nuevasTareas = this.state.tareas.filter(tarea => tarea.key !== id);
    this.setState({
      tareas: nuevasTareas,
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
        <Text>{this.state.texto}</Text>
        <Body
          tareas={this.state.tareas}
          eliminar={this.eliminarTarea}
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
