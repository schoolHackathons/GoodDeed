import React from 'react';
import {Button, StyleSheet, Text, View, Dimensions, Platform } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import TabViewScreen from './TabViewScreen.js';
import LoginScreen from './LoginScreen.js';
import MapScreen from './MapScreen.js';
import SocialScreen from './SocialScreen.js';
import firebase from './Firebase.js';


const person = 'Hackerman BigSexy6';  //NAME

const ProfileScreen = () => (
      <View style={styles.container}>
        <View style = {{backgroundColor: 'white', flex:1, width:'100%'}}>
            <View style={styles.pictureholder}>
                <Ionicons name='md-person' size={150} color='#00e676'/>
            </View>
        </View>
        <View style = {{backgroundColor: '#00b248', flex:1, width:'100%', justifyContent: 'center', shadowOpacity:1, shadowRadius: 5}}>
            <View style={styles.nameholder}>
                <Text
                  // adjustsFontSizeToFit
                  // numberOfLines = {1}
                  style={styles.name}>{person}</Text>
            </View>

            <View style={styles.nameholder}>
                <Text style={styles.othertext}>Service Hours: 0</Text>
            </View>

            {/* <View style={styles.bottom}>
            </View> */}
        </View>
      </View>
);

const wideness=Dimensions.get('window').width;
const font = Platform.OS === 'ios' ? 'Courier' : 'monospace';
const tempSize = (wideness / (person.length * 0.90));
const maxSize = 150;
const sizeOfFont = (tempSize>maxSize) ? maxSize : tempSize;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pictureholder: {
      flex: 2,
      // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  nameholder: {
      flex: 1,
      // backgroundColor: '#00b248',
      alignItems: 'center',
      justifyContent: 'center',
      width: wideness,
  },
  top: {
      flex: 1,
      // height: 75,
      // backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
  },
  bottom: {
    flex:1,
      // height: 100,
      // backgroundColor: '#00b248',
      // alignItems: 'center',
      // justifyContent: 'center',
  },
  picture: {
      width: 200,
      height: 200,
  },
  name: {
      color: '#1F4500',
      fontSize: sizeOfFont,
      fontFamily: font,
      textAlign: 'center',
  },
  othertext: {
      color: '#1F4500',
      fontSize: 30,
      fontFamily: font,
      textAlign: 'center',

  }
});

export default ProfileScreen;
