/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { navigationHook } from "../splash_screen/hooks/navigationHooks";
import AccountSelector from "../../componet/AccountSelector";
import InputFeild from "../../componet/InputFeild";
import Button from "../../componet/Button";


const SignUpScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [name, setName] = useState("");
    const [confimPass, setConfirmPass] = useState("");
    const [selectAccount, setSelectetAccount] = useState("PA");

    const handleSignUpNavigation = () => {
        navigationHook('');
    }

    const handleSignUpAction = () => {
        
    }

    return (
        <View style={style.main}>
            <View style={style.mainContainer}>
                <View style={style.contentHolder}>
                    <View style={style.iconHolder}>
                        <Image style={style.iconStyle} source={{ uri: 'app_logo' }} />
                    </View>
                    <View style={style.titelHolder}>
                        <Text style={style.titelText}>SignUp</Text>
                    </View>
                    <View style={style.accountTypeHolder}>
                        <AccountSelector selectAcc={selectAccount} updateSelectAcc={setSelectetAccount} />
                    </View>
                    <View style={style.formHolder}>
                        <View style={style.formRow}>
                            <InputFeild titel={"Email"} valueSetter={setEmail} placeholderText={"Enter Email Address"} />
                        </View>
                        <View style={style.formRow}>
                            <InputFeild titel={"Name"} valueSetter={setName} placeholderText={"Enter Name"} />
                        </View>
                        <View style={style.formRow}>
                            <InputFeild titel={"Mobile"} valueSetter={setMobile} placeholderText={"Enter Mobile Number"} />
                        </View>
                        <View style={style.formRow}>
                            <InputFeild titel={"Password"} valueSetter={setPassword} placeholderText={"Enter password"} />
                        </View>
                        <View style={style.formRow}>
                            <InputFeild titel={"Confirm Password"} valueSetter={setConfirmPass} placeholderText={"Enter Conifrm password"} />
                        </View>
                    </View>
                    <View style={style.buttonHolder}>
                        {/* button */}
                        <Button onClick={handleSignUpAction} btnText={"SignUp"} bgColour={"#00CEC9"} txtColour={"#FFF"} />
                    </View>
                    <View style={style.naviLinkHolder}>
                        {/* signup view */}
                        <TouchableOpacity onPress={handleSignUpNavigation}>
                            <Text style={style.navigationLinkText}>SignUp here</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    mainContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentHolder: {
        width: '96%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconHolder: {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconStyle: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain'
    },
    titelHolder: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titelText: {
        fontFamily: 'UbuntuMono-Bold',
        fontSize: 40,
        color: '#00CEC9'
    },
    accountTypeHolder: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formHolder: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formRow: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    buttonHolder: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    naviLinkHolder: {
        width: '100%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navigationLinkText: {
        fontFamily: 'UbuntuMono-Bold',
        fontSize: 14,
        color: '#00CEC9'
    }
});


export default SignUpScreen;


