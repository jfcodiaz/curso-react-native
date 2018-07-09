import {
  View, Text, StyleSheet, Button
} from 'react-native';
import React from 'react'
import { createBottomTabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
export class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Button
          title="go back to login screen"
          onPress={()=> this.props.navigation.goBack()}
        />
        <Button
          title="go back to login screen"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}

export class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
        <Button
          title="go back to login screen"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="go back to login screen"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}

const HomeScreen = createBottomTabNavigator({
  Home:{ 
    screen:Home,
    navigationOptions: {
      tabBarLabel: 'Inicio',
      tabBarIcon : ({tintColor}) => (
        <Icon name="ios-home" color={tintColor} size={24}/>
      )
    }
  },
  Settings: {
    screen : Settings,
    navigationOptions:{
      tabBarLAbel: 'Configuración',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-settings" color={tintColor}  size={24} />
      )
    }
  }
}, {
    initialRouteName: 'Settings',
    order: ['Settings', 'Home'],
    navigationOptions: {
      tabBarVisible: true
    },
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey'
    }
  });

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});