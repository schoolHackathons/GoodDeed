import React from 'react';
import {Button, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { createStackNavigator } from 'react-navigation';
import MapView from 'react-native-maps';
import { SearchBar } from 'react-native-elements';
import MapViewDirections from 'react-native-maps-directions';
//import getDirections from 'react-native-google-maps-directions';

const MapScreen = () =>  (

  <View style={{flex:1}}>
        <View style={{flex: 1, flexDirection: 'column', shadowOpacity: 50, shadowRadius: 5}}>
           	
           <SearchBar placeholder='Search Location...' />

           <MapView
            provider = 'google'
            style={{width: '100%', height: '100%'}}
            initialRegion={{
              latitude: 33.7490,
              longitude: 84.3880,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            >
           <MapView.Marker
               
              coordinate={{latitude: 33.7490, longitude: 84.3880}}
            />
            
           </MapView>
        </View>
  </View>
);

export default MapScreen;