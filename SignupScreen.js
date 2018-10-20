import React from 'react';
import {Button, StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { createStackNavigator } from 'react-navigation';

import TabViewExample from './TabViewScreen.js';
import ProfileScreen from './ProfileScreen.js';
import MapScreen from './MapScreen.js';
import SocialScreen from './SocialScreen.js';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'GoodDeed',
  };
  state = { email: '', password: '', errorMessage: null }
  handleSignup = () => {
    // TODO: Firebase
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <Button
        title="Already have an account? Login"
        onPress={() =>
          navigate('Login', {})
        }
      />
      <View style={styles.container}>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="  Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <View style={styles.spacer}></View>
        <TextInput
          secureTextEntry
          placeholder="  Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={styles.spacer}></View>
        <View style={[{width:'90%'}]}>
          <Button title="Sign Up" onPress={this.handleSignup} />
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '40%'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  },
  spacer: {
    height: '10%'
  }
});