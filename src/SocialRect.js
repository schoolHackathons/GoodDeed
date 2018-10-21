import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

class SocialRect extends React.Component { 
  render() {
    let pinPic = {
      uri: 'https://cdn1.iconfinder.com/data/icons/mirrored-twins-icon-set-hollow/512/PixelKit_point_marker_icon.png'
    }; 
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={this.props.PP} style={{width: 50,height: 50}}/>
          <Text style={{margin: 10,fontSize: 20,fontWeight: '300'}}>{this.props.US}</Text>
        </View>
        <View style={styles.picture}>
          <Image source={this.props.PIC} style={{width: '100%',minHeight:350,resizeMode:'cover'}}/>
        </View>
        <View style={styles.footer}>
          <Text style={{flex: 1}}>{this.props.DESC}</Text>
          <View style={styles.location}>
            <Image source={pinPic} style={{width: 25,height: 25}}/>
            <Text style={{marginLeft:5,marginRight: 20}}>{this.props.LOC}</Text>
          </View>
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
    //backgroundColor: '#ffffff',
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
    //backgroundColor: '#ffffff',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  location: {
    flex: 1,
    marginTop:5,
    flexDirection:'row',
  }
});

export default SocialRect;