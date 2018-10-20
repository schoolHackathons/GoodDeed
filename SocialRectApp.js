import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import SocialRect from './components/SocialRect';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView >
          <SocialRect></SocialRect>
          <SocialRect></SocialRect>
          <SocialRect></SocialRect>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});