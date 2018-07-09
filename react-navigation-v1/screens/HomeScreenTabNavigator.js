import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TabNavigator} from 'react-navigation'; 
import Ionicons from 'react-native-vector-icons/Ionicons';

import ScreenOne from './ScreenOne';
import ScreenTow from './ScreenTwo';

export default class AppTabNavibator extends Component{
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft:(
        <View style={{padding:10}}>
          <Ionicons name="md-menu" size={24}
           onPress={()=> navigation.navigate('DrawerOpen')}/>
        </View>

      )
    }
  }
  render() {
    return (
      <HomeScreenTabNavigator screenProps={{navigation: this.props.navigation}}/>
    )
  }
}
const HomeScreenTabNavigator = new TabNavigator({
  ScreenOne: {
    screen: ScreenOne ,
    navigationOptions:{
      tabBarLabel: 'Feed',
      tabBarIncon: () => (
        <Ionicons name="md-compass" size={24}/>
      )
    }
  },
  ScreenTow: {
    screen: ScreenTow,
    navigationOptions: { 
      tabBarLabel: 'Feed',
      tabBarIncon: () => (
        <Ionicons name="md-compass" size={24} />
      )
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
