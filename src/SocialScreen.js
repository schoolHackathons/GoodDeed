import React from 'react';
import {Button, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { createStackNavigator } from 'react-navigation';
import SocialRect from './SocialRect';

const SocialScreen = () => (
	<View style={styles.container}>
        <ScrollView >
          <SocialRect></SocialRect>
          <SocialRect></SocialRect>
          <SocialRect></SocialRect>
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default SocialScreen;