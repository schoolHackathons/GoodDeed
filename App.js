import React from 'react';
import {Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import ProfileScreen from './ProfileScreen.js';
import MapScreen from './MapScreen.js';
import SocialScreen from './SocialScreen.js';
 
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
        //initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}