import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

const SocialRect = () => {
    let pic = {
      uri: 'https://i.imgur.com/xFqtpPf.jpg'
    };
    return (
      <View style={{flex:1,borderWidth:1,margin:5}}>
        <View style={styles.header}>
          <Image source={pic} style={{width: 50,height: 50}}/>
          <Text style={{margin: 10}}>ApprovedCargo91</Text>
        </View>
        <View style={styles.picture}>
          <Image source={pic} style={{width: '100%',minHeight:350,resizeMode:'cover'}}/>
        </View>
        <View style={styles.footer}>
          <Text>High contrast photos of fruit floating threateningly</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    margin: 10,
    flexDirection: 'row',
  },
  picture: {
    flex: 4,
    backgroundColor: '#000000',
  },
  footer: {
    flex: 1,
    backgroundColor: '#ffffff',
    margin: 10,
  },
});

export default SocialRect;