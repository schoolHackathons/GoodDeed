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
        SearchBar } from 'react-native';
//import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
//import { createStackNavigator } from 'react-navigation';
import SocialRect from './SocialRect';
import RetrieveLocation from './RetrieveLocation'
let pic1 = {
  uri: 'https://i.imgur.com/xFqtpPf.jpg'
};
let pic2 = {
  uri: 'https://i.imgur.com/lh9OPWJ.png'
};
let PP1 = {
  uri: 'https://i.imgur.com/3p1Nh2D.jpg'
};
let PP2 = {
  uri: 'https://pbs.twimg.com/profile_images/1050413398498926593/Cgy_nQVl_bigger.jpg'
}; 
US1 = 'ApprovedCargo91'
US2 = 'Alpharad'
DESC1 = 'High contrast photos of fruit floating threateningly, specifically Chaquita bananas'
DESC2 = 'GAMERS RISE UP';
LOC1 = <RetrieveLocation></RetrieveLocation>
LOC2 = 'Memeth Dabbeth Inc., 69420 Meme Street, Meme, MM 69420'

class SocialScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [{key: <SocialRect PIC={pic1} PP={PP1} US={US1} DESC={DESC1} LOC={LOC1}></SocialRect>},{key: <SocialRect PIC={pic2} PP={PP2} US={US2} DESC={DESC2} LOC={LOC2}></SocialRect>}],
      error: null,
      refreshing: false,
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
    var i;
    for(i=0;i<8;i++){
      this.setState({
        data: [...this.state.data, {key: <SocialRect PIC={pic1} PP={PP1} US={US1} DESC={DESC1} LOC={LOC1}></SocialRect>}]
      })
    }
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