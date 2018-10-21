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
let pic3 = {
  uri: 'https://i1.wp.com/schoolcraftconnection.com/wp-content/uploads/2018/02/SoupKitchen-ArielSkelly-GettyImages-CruxNowCOM-1.jpg?fit=640%2C360&ssl=1'
};
let pic2 = {
  uri: 'https://static1.squarespace.com/static/5939441b1e5b6c8ab18e524f/59394ac337c5817916077651/596fc206c534a5fa937c4468/1525377521747/walk-with-me.jpg?format=1000w'
};
let pic1 = {
  uri: 'https://www.thoughtco.com/thmb/45XWafEdDpIzg4Ze9943GM7fMi4=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-187244393-5a980ce743a1030037ba389f.jpg'
}
IDs = ['ea7706cb0b5a4346ba42da9cb2112756','58cc719a3a744d5ea0a42c1e84d715a1','7da39fda1bdf4bb8952d8a5d2dc0c38c']
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
      data: [{key: <SocialRect key={SRN} PIC={pic1} PP={<RetrieveProfPic id={IDs[0]}/>} US={<RetrieveOrgName id={IDs[0]}/>} DESC={<RetrieveDesc id={IDs[0]}/>} LOC={<RetrieveLocation id={IDs[0]}/>}/>},{key: <SocialRect key={SRN} PIC={pic2} PP={<RetrieveProfPic id={IDs[1]}/>} US={<RetrieveOrgName id={IDs[1]}/>} DESC={<RetrieveDesc id={IDs[1]}/>} LOC={<RetrieveLocation id={IDs[1]}/>}/>},{key: <SocialRect key={SRN} PIC={pic3} PP={<RetrieveProfPic id={IDs[2]}/>} US={<RetrieveOrgName id={IDs[2]}/>} DESC={<RetrieveDesc id={IDs[2]}/>} LOC={<RetrieveLocation id={IDs[2]}/>}/>}],
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
      data: [...this.state.data, {key: <SocialRect key={SRN} PIC={pic1} PP={<RetrieveProfPic id={IDs[0]}/>} US={<RetrieveOrgName id={IDs[0]}/>} DESC={<RetrieveDesc id={IDs[0]}/>} LOC={<RetrieveLocation id={IDs[0]}/>}/>},{key: <SocialRect key={SRN} PIC={pic2} PP={<RetrieveProfPic id={IDs[1]}/>} US={<RetrieveOrgName id={IDs[1]}/>} DESC={<RetrieveDesc id={IDs[1]}/>} LOC={<RetrieveLocation id={IDs[1]}/>}/>},{key: <SocialRect key={SRN} PIC={pic3} PP={<RetrieveProfPic id={IDs[2]}/>} US={<RetrieveOrgName id={IDs[2]}/>} DESC={<RetrieveDesc id={IDs[2]}/>} LOC={<RetrieveLocation id={IDs[2]}/>}/>}],
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
    backgroundColor: '#00e676'
  },
});


export default SocialScreen;