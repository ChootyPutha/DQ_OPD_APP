import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

const MyAppoinmentHistoryScreen = () => {
    return(
        <View style={style.main}>
            <View style={style.mainContainer}>

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    main : {
        flex : 1,
        backgroundColor : '#fff',
        alignItems : 'center'
    },
    mainContainer : {
        width : '100%',
        height : '100%',
        alignItems :'center',
        backgroundColor :'#fff'
    }

});

export default MyAppoinmentHistoryScreen;