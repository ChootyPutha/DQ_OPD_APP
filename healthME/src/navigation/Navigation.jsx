import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SplashScreen from "../screen/splash_screen/SplashScreen";
import HomeScreen from "../screen/Paitent/home_screen/HomeScreen";



const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Splash" options={{headerShown: false}} component={SplashScreen} ></Stack.Screen>
                <Stack.Screen name="PatientHome" options={{headerShown: false}} component={HomeScreen} ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}