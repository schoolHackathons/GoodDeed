import React from 'react';
import {Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { createStackNavigator } from 'react-navigation';
import {MapView} from 'expo';

const MapScreen = () => (
  <View style={{flex:1, overflow:'hidden'}}>
        <View style={{flex: 1}}>

        </View>
        <View style={{overflow: 'hidden',flex: 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', shadowOpacity: 50, shadowRadius: 5}}>
        <MapView
        style={{ overflow: 'hidden', width: '85%', height: '85%',borderRadius: 15, borderWidth: 2, borderColor: 'white'}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        />
        </View>
      </View>
);

export default MapScreen;