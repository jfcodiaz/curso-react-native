import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numero: 2
    }
  }
  aumentar() {
    this.setState({
      numero: this.state.numero+1
    })
  }
  disminuir () {
    this.setState({
      numero: this.state.numero-1
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cajaUno}>
          <Text>Contador</Text>
        </View>
        <View style={styles.cajaDos}>
          <Text>{this.state.numero}</Text>
        </View>
        <View style={styles.cajaTres}>
          <Button title="Aumentar"
            onPress={()=> {
              this.aumentar()
            }}
          />
          <Button title="Disminuir"
            onPress={()=>{
              this.disminuir()
            }}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cajaUno: {
    flex: 1,
    backgroundColor: '#00ff00',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cajaDos: {
    flex: 3,
    backgroundColor: '#90EE90',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cajaTres: {
    flex: 1,
    backgroundColor: '#006400',
  }
});
