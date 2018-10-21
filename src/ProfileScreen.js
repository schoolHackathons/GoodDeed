import React from 'react';
import {Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

const text = "my name is sponge"

const ProfileScreen = () => (
      <View style={styles.container}>
        <View style = {{backgroundColor: 'white', flex:1, width:'100%'}}>
            {/* <View style={styles.top}>
            </View> */}
            <View style={styles.pictureholder}>
                <Ionicons name='md-person' size={150} color='#66ffa6'/>
            </View>
        </View>
        <View style = {{backgroundColor: '#C0C0C0', flex:1, width:'100%'}}>
            <View style={styles.nameholder}>
                <Text
                  // adjustsFontSizeToFit
                  // numberOfLines = {1}
                  style={styles.name}>{text}</Text>
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
const tempSize = Platform.OS === 'ios' ? (wideness / ((text.length)*0.63)) : (wideness / (text.length * 0.63));
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
      color: '#00b248',
      fontSize: sizeOfFont,
      fontFamily: font,
  },
  othertext: {
      color: '#00b248',
      fontSize: 30
  }
});

export default ProfileScreen;