import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const AccountSelector = ({ selectAcc, updateSelectAcc }) => {

    const [selectAcct, setSelectAccount] = useState(selectAcc);

    const handleAccountSelect = (accType) => {
        setSelectAccount(accType);
    }

    useEffect(() => {
        updateSelectAcc(selectAcct);
    }, [selectAcct]);

    return (
        <View style={style.main}>
            <View style={style.mainHolder}>
                <TouchableOpacity style={style.singleAccountHolderTouch} onPress={() => { handleAccountSelect('PA'); }}>
                    <View style={style.singleAccountHolder}>
                        <View style={style.singleAccInfoHolder}>
                            <View style={style.singleAccAvatr}>
                                <Image style={style.singleAvatrs} source={{ uri: (selectAcc == "PA") ? "active_acc" : "deactive_acc" }} />
                            </View>
                            <View style={style.singleAccName}>
                                <Text style={[style.singleAccNameText, { color: (selectAcc == 'PA') ? "#00CEC9" : "#DFE6E999" }]}>Patient</Text>
                            </View>
                        </View>
                        <View style={[style.singleBottomLineHolder, { backgroundColor: (selectAcc == 'PA') ? "#00CEC9" : "#DFE6E999" }]}>

                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={style.singleAccountHolderTouch} onPress={() => { handleAccountSelect('AD'); }}>
                    <View style={style.singleAccountHolder}>
                        <View style={style.singleAccInfoHolder}>
                            <View style={style.singleAccAvatr}>
                                <Image style={style.singleAvatrs} source={{ uri: (selectAcc == "AD") ? "active_acc" : "deactive_acc" }} />
                            </View>
                            <View style={style.singleAccName}>
                                <Text style={[style.singleAccNameText, { color: (selectAcc == 'AD') ? "#00CEC9" : "#DFE6E999" }]}>Admin</Text>
                            </View>
                        </View>
                        <View style={[style.singleBottomLineHolder, { backgroundColor: (selectAcc == 'AD') ? "#00CEC9" : "#DFE6E999" }]}>

                        </View>
                    </View>
                </TouchableOpacity>
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
        flexDirection: 'row'
    },
    singleAccountHolder: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    singleAccountHolderTouch: {
        width: '45%',
        height: '95%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    singleAccInfoHolder: {
        width: '80%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    singleAccAvatr: {
        width: '20%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    singleAvatrs: {
        width: '90%',
        height: '90%',
        resizeMode: 'contain'
    },
    singleAccName: {
        width: '40%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    singleAccNameText: {
        fontSize: 14,
        fontFamily: 'UbuntuMono-Bold',
        color: '#DFE6E999'
    },
    singleBottomLineHolder: {
        width: '90%',
        height: '8%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#00CEC9'
    }
})

export default AccountSelector;