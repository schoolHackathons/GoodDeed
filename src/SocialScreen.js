import React, { Component } from 'react';
import {Button, 
        Text, 
        StyleSheet, 
        View, 
        Dimensions, 
        FlatList, 
        List, 
        ListItem, 
        ActivityIndicator,
        Image,
        SearchBar } from 'react-native';
//import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
//import { createStackNavigator } from 'react-navigation';
import SocialRect from './SocialRect';
import RetrieveLocation from './RetrieveLocation'
import RetrieveOrgName from './RetrieveOrgName'
import RetrieveProfPic from './RetrieveProfPic'
import RetrieveDesc from './RetrieveDesc'
import GetOrgIDs from './GetOrgIDs'
meme = ['Alpharad','GAMERS RISE UP','Memeth Dabbeth Inc., 69420 Meme Street, Meme, MM 69420']
let pic1 = {
  uri: 'https://i1.wp.com/schoolcraftconnection.com/wp-content/uploads/2018/02/SoupKitchen-ArielSkelly-GettyImages-CruxNowCOM-1.jpg?fit=640%2C360&ssl=1'
};
let pic2 = {
  uri: 'https://i.imgur.com/lh9OPWJ.png'
};
IDs = <GetOrgIDs/>
PP1 = <RetrieveProfPic/>;
PP2 = <Image source={{uri: 'https://pbs.twimg.com/profile_images/1050413398498926593/Cgy_nQVl_bigger.jpg'}}/>
US1 = <RetrieveOrgName/>
US2 = meme[0]
DESC1 = <RetrieveDesc/>
DESC2 = meme[1]
LOC1 = <RetrieveLocation/>
LOC2 = meme[2]
SRN = 0;

class SocialScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [{key: <SocialRect key={SRN} PIC={pic1} PP={<RetrieveProfPic/>} US={<RetrieveOrgName/>} DESC={<RetrieveDesc/>} LOC={<RetrieveLocation/>}/>}],
      error: null,
      refreshing: false,
      SRN: 1,
    };
  }
  
  handleRefresh = () => {
    this.setState(
      {
        refreshing: true,
      }
    )
    this.render()
    this.setState(
      {
        refreshing: false,
      }
    )
  }

  handleLoadMore = () => {
    this.setState({
      data: [...this.state.data, {key: <SocialRect key={SRN} PIC={pic1} PP={<RetrieveProfPic/>} US={<RetrieveOrgName/>} DESC={<RetrieveDesc/>} LOC={<RetrieveLocation/>}/>}],
      SRN: this.state.SRN + 1,
    })
    this.render();
  }

  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View style={{paddingVertical: 20}}>
        <ActivityIndicator animating size='large'/>
      </View>
    ) 
  };

  render() {
    return (
        <FlatList 
          removeClippedSubviews={true}
          data={this.state.data}
          renderItem={({item}) => <View style={styles.container}>{item.key}</View>}
          keyExtractor={item => item.US}
          ListFooterComponent={this.renderFooter}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          onEndReached={this.handleLoadMore}
          onEndThreshold={1000}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default SocialScreen;