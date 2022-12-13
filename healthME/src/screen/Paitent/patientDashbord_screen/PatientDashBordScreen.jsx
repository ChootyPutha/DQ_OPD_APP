/* eslint-disable prettier/prettier */
import React from "react";

import { View, StyleSheet, Text, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "../home_screen/HomeScreen";
import MyAppoinmentHistoryScreen from "../myhistory_screen/MyAppinmentPastInfo_Screen";

const PatientDashBordScreen = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home"  options={{headerShown: false}} component={HomeScreen} />
            <Tab.Screen name="My Appoinment" options={{headerShown: false}} component={MyAppoinmentHistoryScreen} />
        </Tab.Navigator>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default PatientDashBordScreen;