import React from "react";
import { View, StyleSheet, Text,TextInput, TouchableOpacity, } from 'react-native';

const InputFeild = ({titel, valueSetter, placeholderText, ref}) => {

    return(
        <View style={[style.main]}>
            <View style={style.holder}>
                <View style={style.titelHolder}>
                    <Text style={style.titelText}>{titel}</Text>
                </View>
                <View style={style.inputHolder}>
                    <TextInput style={style.inputStyle} onChangeText={(val) => {valueSetter(val)}} placeholder={placeholderText}  />
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

export default InputFeild;
