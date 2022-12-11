import React from "react";
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();

function navigateTimeOutLoginHook(pathName) {
    setTimeout(()=>{
        // calling naviagte to login
        navigation.navigate(pathName);
    },3000);
}

function navigationHook(pathName){
    navigation.navigate(pathName);
}

export {navigateTimeOutLoginHook};
export {navigationHook};