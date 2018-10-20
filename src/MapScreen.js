import React from 'react';
import {Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { createStackNavigator } from 'react-navigation';
import MapView from 'react-native-maps';

const MapScreen = () =>  (        //becomes class that extends the Component class

  // state={ markers: [{
  //   title: 'hello',
  //   coordinates: {
  //     latitude: 3.148561,
  //     longitude: 101.652778
  //   },
  // },
  // {
  //   title: 'hello',
  //   coordinates: {
  //     latitude: 3.149771,
  //     longitude: 101.655449
  //   },
  // }]};

//
//   getInitialState() {
//     return {
//       region: {
//         latitude: 37.78825,
//         longitude: -122.4324,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       },
//     };
//   }
//
//   onRegionChange(region) {
//     this.setState({ region });
//   }

      <View style={{flex:1}}>
            <View style={{flex: 1}}>
            </View>

            <View style={{flex: 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', shadowOpacity: 50, shadowRadius: 5}}>
                <MapView
                style={{width: '100%', height: '100%'}}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              // region={this.state.region}
              // onRegionChange={this.onRegionChange}
                >
               <MapView.Marker
                   // coordinate={marker.latlng}
                   // title={marker.title}
                   // description={marker.description}

                  coordinate={{latitude: 37.38825, longitude: -122.4324}}
                />
               </MapView>
            </View>
      </View>

);

export default MapScreen;
