import React from 'react';
import {Button, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { createStackNavigator } from 'react-navigation';
import MapView from 'react-native-maps';
import { SearchBar } from 'react-native-elements';
import MapViewDirections from 'react-native-maps-directions';
//import getDirections from 'react-native-google-maps-directions';

class MapScreen extends React.PureComponent {

    state = {
        markers: [{
          title: 'Hindu Temple Youth Group',
          coordinates: {
            latitude: 38.613992,
            longitude: -90.498709
          },
        },
        {
          title: 'Hands On Atlanta',
          coordinates: {
          latitude: 32.772356,
          longitude: -84.12321
          },
        },
        {
          title: 'New York Cares',
          coordinates: {
          latitude: 40.707292,
          longitude: -74.012574
          },
        },
        {
          title: 'Trees Atlanta',
          coordinates: {
          latitude: 33.748150,
          longitude: -84.359929
          },
        }
      ]
      };


  render() {
    return(
      <View style={{flex:1}}>
            <View style={{flex: 1, flexDirection: 'column', shadowOpacity: 50, shadowRadius: 5}}>

              <View>
               <MapView
                provider = 'google'
                style={{width: '100%', height: '100%'}}
                // region = {this.state.region}
                initialRegion={{
                  latitude: 33.7490,
                  longitude: -84.3880,
                  latitudeDelta: 0.0522,
                  longitudeDelta: 0.0121,
                }}
              >
                <SearchBar lightTheme
                          placeholder='Search Location...'/>

                {this.state.markers.map(marker => (
               <MapView.Marker
                  coordinate={marker.coordinates}
                  title={marker.title}
                />
))}
               </MapView>
             </View>
            </View>
      </View>
    );
  }
};

export default MapScreen;
