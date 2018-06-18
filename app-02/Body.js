import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import Tarea from './Tarea';

export default class Body extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.cargando &&

        <ActivityIndicator
          size="large"
          color="#640064"
        />
        }
        <FlatList
          data={this.props.tareas}
          renderItem={({ item }) => <Tarea item={item} eliminar={this.props.eliminar} />}

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#98FB98',
  },
});
