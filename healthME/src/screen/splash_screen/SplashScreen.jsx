import React from "react";
import { View, StyleSheet, Text } from "react-native";


const SplashScreen = () => {
    return (
        <View style={style.main}>
            <View style={style.titleHolder}>
                <View style={style.mainTitelContainer}>
                    <Text style={style.titelText}>CareME</Text>
                </View>
                <View style={style.subTitelContainer}>
                    <Text style={style.subTitelText}>Care your self with CareME</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({

    main : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#00CEC9'
    },
    titleHolder : {
        width : "70%",
        height : "40%",
        alignItems : 'center',
        justifyContent : 'center',
    },
    mainTitelContainer : {
        width : "80%",
        height : "20%",
        alignItems : 'center',
        justifyContent : 'center',
    },
    titelText : {
        fontFamily : 'UbuntuMono-Bold',
        fontSize : 50,
        color : '#fff'
    },
    subTitelContainer : {
        width : "80%",
        height : "10%",
        alignItems : 'center',
        justifyContent : 'center',
    },
    subTitelText : {
        fontSize : 14,
        fontFamily : 'UbuntuMono-Bold',
        color : '#fff'
    },

});

export default SplashScreen;

