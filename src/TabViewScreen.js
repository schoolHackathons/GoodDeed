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
            backgroundColor: '#53B700',
        },
        headerTintColor: 'FFFFFF',
        headerTitleStyle: {
            color: 'FFFFFF',
         }
    };

    state = {
        index: 0,
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
                <TabBar{...props} style={{backgroundColor:'#BEBEBE'}} tabStyle={{backgroundColor:'#449600'}}/>
                }
                onIndexChange={index => this.setState({ index })}
                //initialLayout={{ width: Dimensions.get('window').width }}
            />
        );
    }
}