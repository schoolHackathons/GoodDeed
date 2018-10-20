import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
class SocialRect extends React.Component { 
  render() {
    let pic = {
      uri: 'https://i.imgur.com/xFqtpPf.jpg'
    }; 
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={this.props.PP} style={{width: 50,height: 50}}/>
          <Text style={{margin: 10}}>{this.props.US}</Text>
        </View>
        <View style={styles.picture}>
          <Image source={this.props.PIC} style={{width: '100%',minHeight:350,resizeMode:'cover'}}/>
        </View>
        <View style={styles.footer}>
          <Text>{this.props.DESC}</Text>
        </View>
      </View>  
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    margin: 5,
    borderRadius: 15,
  },
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
    //flex: 1,
    backgroundColor: '#ffffff',
    margin: 10,
  },
});

export default SocialRect;