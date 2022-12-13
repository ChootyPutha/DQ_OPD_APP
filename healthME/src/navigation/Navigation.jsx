/* eslint-disable prettier/prettier */
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SplashScreen from "../screen/splash_screen/SplashScreen";
import SignUpScreen from "../screen/signup_screen/Signup_Screen";
import AuthScreen from "../screen/auth_screen/AuthScreen";
import DashBordScreen from "../screen/Admin/dashbord_screen/DashBordScreen";
import PatientDashBordScreen from "../screen/Paitent/patientDashbord_screen/PatientDashBordScreen";


const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Splash" options={{headerShown: false}} component={SplashScreen} ></Stack.Screen>
                <Stack.Screen name="PatientHome" options={{headerShown: true, title : "CareME"}} component={PatientDashBordScreen} ></Stack.Screen>
                <Stack.Screen name="AdminHome" options={{headerShown: true, title:"CareME"}} component={DashBordScreen} ></Stack.Screen>
                <Stack.Screen name="Auth" options={{headerShown: false}} component={AuthScreen} ></Stack.Screen>
                <Stack.Screen name="Signup" options={{headerShown: false}} component={SignUpScreen} ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;