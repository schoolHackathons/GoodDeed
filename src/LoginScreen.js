import React from 'react';
import {Button, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { createStackNavigator } from 'react-navigation';

import TabViewScreen from './TabViewScreen.js';
import ProfileScreen from './ProfileScreen.js';
import MapScreen from './MapScreen.js';
import SocialScreen from './SocialScreen.js';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'GoodDeed',
  };
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    // TODO
  }
  render() {
    return (
      <View>
      <Button
        color='#00b248'
        title="Don't have an account?  Sign up"
        onPress={() =>
          this.props.navigation.navigate('Signup', {})
        }
      />
      <View style={styles.container}>
        <Text style={styles.title}>Log In</Text>
      </View>
      <View style={styles.container}>
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
        <View style={styles.spacer}></View>
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
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={[{width: '90%'}]}>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('Tab', {})}>
            <Text style={[{fontSize: 15}]}>Log In</Text>
            </TouchableOpacity>
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 80,
    textShadowColor: 'black'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '40%',
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
  spacer: {
    height: '10%'
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'white',
    backgroundColor: '#66ffa6',
    overflow: 'hidden',
    height: 40
  }
});