import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Home from './components/home'
import Filter from './components/filter'

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Filter: { screen: Filter }
});

const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f55',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
