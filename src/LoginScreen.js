import React from 'react';
import {Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { createStackNavigator } from 'react-navigation';

import TabViewExample from './TabViewScreen.js';
import ProfileScreen from './ProfileScreen.js';
import MapScreen from './MapScreen.js';
import SocialScreen from './SocialScreen.js';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'GoodDeed',
  };
  render() {
    return (
      <View>
      <Button
        title="Login"
        onPress={() =>
          this.props.navigation.navigate('Tab', {})
        }
      />
      <Button
        title="Sign Up"
        onPress={() =>
          this.props.navigation.navigate('Signup', {})
        }
      />
      </View>
    );
  }
}
