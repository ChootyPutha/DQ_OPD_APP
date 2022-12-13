/* eslint-disable prettier/prettier */

import React from "react";
import { View, StyleSheet, Text,TextInput, TouchableOpacity, } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateAndTimePicker = ({titel, valueSetter, placeholderText,mode, ref}) => {

    return(
        <View style={[style.main]}>
            <View style={style.holder}>
                <View style={style.titelHolder}>
                    <Text style={style.titelText}>{titel}</Text>
                </View>
                <View style={style.inputHolder}>
                    <DateTimePicker style={style.inputStyle} mode = {mode} onChange={(val) => {valueSetter(val)}} placeholder={placeholderText}  />
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    holder: {
        width: '96%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#DFE6E999'
    },
    titelHolder : {
        width: '50%',
        height: '30%',
        position : 'absolute',
        top: -8,
        left : 25
    }, 
    titelText : {
        fontSize: 14,
        fontFamily: 'UbuntuMono-Bold',
        color: '#000'
    },
    inputHolder : {
        width: '96%',
        height: '100%',
        justifyContent : 'center'
    },
    inputStyle : {
        fontSize: 16,
        fontFamily: 'UbuntuMono-Bold',
        color: '#000'
    }
});

export default DateAndTimePicker;