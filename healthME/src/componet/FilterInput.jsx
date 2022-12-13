/* eslint-disable prettier/prettier */
import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const FilterInput = () => {
    return (
        <View style={style.main}>
            <View style={style.mainHolder}>
                <View style={style.inputContainer}>
                    <View style={style.inputHolder}>
                        <TextInput style={style.serchInputText} placeholder="Search Doc here" onChangeText={(val) => { }} />
                    </View>
                    <View style={style.serchbtnHolder}>
                        <TouchableOpacity style={style.serchBtn}>
                            <View style={style.serchBtn}>
                                <Text style={style.serchText}>Find</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
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
    mainHolder: {
        width: '96%',
        height: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DFE6E999',
        borderRadius: 15,
    },
    inputContainer: {
        width: '95%',
        height: '94%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    inputHolder: {
        width: '70%',
        height: '98%',
        justifyContent: 'center',
    },
    serchbtnHolder: {
        width: '30%',
        height: '98%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    serchBtn: {
        width: '95%',
        height: '98%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: '#00CEC9'
    },
    serchText: {
        fontFamily: 'UbuntuMono-Bold',
        fontSize: 20,
        color: '#FFF'
    },
    serchInputText: {
        fontFamily: 'UbuntuMono-Bold',
        fontSize: 18,
        color: '#000'
    }


});


export default FilterInput;
