import React from 'react';
import {Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
//import { createStackNavigator } from 'react-navigation';

//import LoginScreen from './LoginScreen.js';
//import TabViewExample from './TabViewExample.js';
import ProfileScreen from './ProfileScreen.js';
import MapScreen from './MapScreen.js';
import SocialScreen from './SocialScreen.js';
 /*
const App = createStackNavigator({
  Login: { screen: LoginScreen },
  Tab: { screen: TabViewExample },
});

export default App;
*/
export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Profile' },
      { key: 'second', title: 'Map' },
      { key: 'third', title: 'Social' },
    ],
  };
 
  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: ProfileScreen,
          second: MapScreen,
          third: SocialScreen,
        })}
        onIndexChange={index => this.setState({ index })}
        background
        //initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}
/*

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Login"
        onPress={() =>
          navigate('Tab', {})
        }
      />
    );
  }
}

class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Profile' },
      { key: 'second', title: 'Map' },
      { key: 'third', title: 'Social' },
    ],
  };
 
  render() {
  	const { navigate } = this.props.navigation;
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: ProfileScreen,
          second: MapScreen,
          third: SocialScreen,
        })}
        onIndexChange={index => this.setState({ index })}
        //initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

*/