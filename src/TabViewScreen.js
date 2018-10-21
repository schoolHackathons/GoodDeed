import React from 'react';
import {Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { createStackNavigator } from 'react-navigation';

import ProfileScreen from './ProfileScreen.js';
import MapScreen from './MapScreen.js';
import SocialScreen from './SocialScreen.js';

export default class TabViewScreen extends React.Component {
    static navigationOptions = {
        title: 'GoodDeed',
        headerStyle: {
            backgroundColor: '#00e676',
        },
    };

    state = {
        index: 1,
        routes: [
            { key: 'first', title: 'Profile' },
            { key: 'second', title: 'Map' },
            { key: 'third', title: 'Social' },
        ],
    };

    render() {
        return (
            <TabView
                tabBarPosition= 'bottom'
                navigationState={this.state}
                renderScene={SceneMap({
                    first: ProfileScreen,
                    second: MapScreen,
                    third: SocialScreen,
                })}
                renderTabBar={props =>
                <TabBar{...props} style={{backgroundColor:'#00b248'}} tabStyle={{backgroundColor:'#00b248'}}/>
                }
                onIndexChange={index => this.setState({ index })}
                //initialLayout={{ width: Dimensions.get('window').width }}
            />
        );
    }
}
