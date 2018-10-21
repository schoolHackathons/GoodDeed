import React from 'react';
import {Button, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { createStackNavigator } from 'react-navigation';

import TabViewScreen from './TabViewScreen.js';
import ProfileScreen from './ProfileScreen.js';
import MapScreen from './MapScreen.js';
import SocialScreen from './SocialScreen.js';
import firebase from './Firebase.js';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'GoodDeed',
    headerStyle: {
        backgroundColor: '#1F4500',
    },
  };
  state = { 
    emailBuffer: '',
    passwordBuffer: '', 
    serviceHoursBuffer: 0,
    errorMessage: null 
  }
  
  handleLogin = () => {
    db = firebase.database();

    db.ref('users/').once("value", function(data) {
      console.log(data);
    }); 

    this.props.navigation.navigate('Tab', {});
  }

  render() {
    return (
      <View style={styles.big}>
        <View style={styles.container}>
          <Text style={styles.title}>Log In</Text>
        </View>
        <View style={styles.formContainer}>
          {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
          <View style={styles.textBox}>
            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              underlineColorAndroid='transparent'
              autoCorrect={false}
              style={styles.textInput}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
          </View>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.textBox}>
            <TextInput
              secureTextEntry
              placeholder="Password"
              autoCapitalize="none"
              underlineColorAndroid='transparent'
              autoCorrect={false}
              style={styles.textInput}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={[{width: '90%'}]}>
            <TouchableOpacity style={styles.buttonStyle} onPress={this.handleLogin}>
              <Text style={[{fontSize: 15}]}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.link}>
          <View style={[{width:'100%'}]}>
            <Button
              color='#1F4500'
              title="Don't have an account?  Sign up"
              onPress={() =>
                this.props.navigation.navigate('Signup', {})
              }
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  big: {
    flex: 1
  },
  title: {
    fontSize: 80,
    textShadowColor: 'black'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '35%',
    paddingBottom:'4%'
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:'1%'
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:'10%'
  },
  textInput: {
    fontSize: 20,
    marginTop: 8,
    textAlign: 'center'
  },
  textBox: {
    borderStyle: 'solid',
    borderRadius: 10,
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'white',
    backgroundColor: '#53B700',
    overflow: 'hidden',
    height: 40
  },
  link: {
    flex: 5,
    justifyContent: 'flex-end',
    bottom: 0
  }
});