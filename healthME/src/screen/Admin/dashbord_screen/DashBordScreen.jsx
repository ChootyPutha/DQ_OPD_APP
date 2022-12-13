/* eslint-disable prettier/prettier */
import React from "react";

import { View, StyleSheet, Text, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CreateChannelScreen from "../addchannel_screen/CreateChannelScreen";
import ChanelListScreen from "../channelList_screen/ChannelListScreen";

const DashBordScreen = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" options={{headerShown: false}} component={ChanelListScreen} />
            <Tab.Screen name="Add Channel" options={{headerShown: false}} component={CreateChannelScreen} />
        </Tab.Navigator>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default DashBordScreen;