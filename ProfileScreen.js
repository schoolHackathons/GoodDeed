import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//import ProfileScreen from './components/ProfileScreen';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
            <View style={styles.top}>
            </View>
            <View style={styles.pictureholder}>
                <Ionicons name='md-person' size={150} color='#66ffa6'/>
            </View>
            <View style={styles.nameholder}>
                <Text style={styles.name}>TACO</Text>
            </View>
            <View style={styles.nameholder}>
                <Text style={styles.othertext}>Service Hours: 0</Text>
            </View>
            <View style={styles.bottom}>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pictureholder: {
      flex: 2,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  nameholder: {
      flex: 1,
      backgroundColor: '#00b248',
      alignItems: 'center',
      justifyContent: 'center',
  },
  top: {
      height: 75,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  bottom: {
      height: 100,
      backgroundColor: '#00b248',
      alignItems: 'center',
      justifyContent: 'center',
  },
  picture: {
      width: 200,
      height: 200,
  },
  name: {
      color: '#66ffa6',
      fontSize: 100,
  },
  othertext: {
      color: '#66ffa6',
      fontSize: 30
  }
});
