/* eslint-disable prettier/prettier */
import React from "react";

import {View, StyleSheet, Text, } from 'react-native';

const CreateChannelScreen = () => {
    return(
        <View style={style.main}>
            <View style={style.mainHolder}>
                <View style={style.titelHolder}>
                    <Text style={style.titelText}>Create New Channel</Text>
                </View>

                <View>
                
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    main : {
        flex :1,
        backgroundColor  :'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    mainHolder : {
        width : '100%',
        height : '100%',
        alignItems:'center',
        justifyContent : 'center'
    },
    titelHolder : {
        width : '100%',
        height : '15%',
        alignItems:'center',
        justifyContent : 'center'
    },
    titelText : {
        fontFamily: 'UbuntuMono-Bold',
        fontSize: 30,
        color: '#00CEC9'
    }


});

export default CreateChannelScreen;