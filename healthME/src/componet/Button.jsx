import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, } from 'react-native';

const Button = ({ onClick, btnText, bgColour, txtColour }) => {
    return (
        <View style={style.main}>
            <TouchableOpacity style={style.holder} onPress={onClick}>
                <View style={[style.buttonFram, { backgroundColor: bgColour }]}>
                    <Text style={[style.buttonText, { color: txtColour }]}>{btnText}</Text>
                </View>
            </TouchableOpacity>
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
        backgroundColor: '#FFF'
    },
    buttonFram: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#FFF'
    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'UbuntuMono-Bold',
        color: '#fff'
    }

});

export default Button;