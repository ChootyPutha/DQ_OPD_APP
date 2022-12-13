import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SplashScreen from "../screen/splash_screen/SplashScreen";
import HomeScreen from "../screen/Paitent/home_screen/HomeScreen";
import SignUpScreen from "../screen/signup_screen/Signup_Screen";
import AuthScreen from "../screen/auth_screen/AuthScreen";
import MyAppoinmentHistoryScreen from "../screen/Paitent/myhistory_screen/MyAppinmentPastInfo_Screen";


const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Splash" options={{headerShown: false}} component={SplashScreen} ></Stack.Screen>
                <Stack.Screen name="PatientHome" options={{headerShown: false}} component={HomeScreen} ></Stack.Screen>
                <Stack.Screen name="Auth" options={{headerShown: false}} component={AuthScreen} ></Stack.Screen>
                <Stack.Screen name="Signup" options={{headerShown: false}} component={SignUpScreen} ></Stack.Screen>
                <Stack.Screen name="PatientHistory" options={{headerShown: false}} component={MyAppoinmentHistoryScreen} ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;