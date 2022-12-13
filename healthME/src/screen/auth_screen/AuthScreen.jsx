/* eslint-disable prettier/prettier */
import React, { useState, } from "react";
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { navigationHook } from "../splash_screen/hooks/navigationHooks";
import Button from "../../componet/Button";
import InputFeild from "../../componet/InputFeild";
import AccountSelector from "../../componet/AccountSelector";
import {Funtion_Sigin} from './hooks/siginHooks';
import { useNavigation } from '@react-navigation/native';
import {validEmailAddress} from '../signup_screen/hooks/formValidation';

const AuthScreen = () => {

    const navigation = useNavigation();

    const handelSingInNavigation = () => {
        navigation.navigate('Signup');
    }

    const formValidation = () => {
        
        if(email != ""){
            if(validEmailAddress(email)){
                if(password != ""){
                   // handelSinginAction();
                    navigation.navigate('PatientHome');
                }else{
                    alert("Plase enter password");
                }
            }else{
                alert("Plase enter valid email address");
            }
        }else{
            alert("Plase enter email");
        }
    }

    const handelSinginAction = () => {
        const response = Funtion_Sigin(email,password,selectAccount);
        console.log(' result '+JSON.stringify(response));

        if(response.type == 'success' && selectAccount == 'PA'){
            //naviagte to patient home
            //navigationHook('');
            navigation.navigate('PatientHome');
        // eslint-disable-next-line quotes
        }else if (response.type == 'success' && selectAccount == "AD"){
            //naviagte to admin home
            navigation.navigate('AdminHome');
        }else{
            //show error message
            alert("Unable to signin, plase try again");
        }
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectAccount, setSelectetAccount] = useState("PA"); // admin AD

    return (
        <View style={style.main}>
            <View style={style.mainContainer}>
                <View style={style.contentHolder}>
                    <View style={style.iconHolder}>
                        {/* icon here */}
                        <Image style={style.iconStyle} source={{ uri: 'app_logo' }} />
                    </View>
                    <View style={style.titelHolder}>
                        {/* titel here */}
                        <Text style={style.titelText}>SignIn</Text>
                    </View>
                    <View style={style.accountTypeHolder}>
                        {/* account type view */}
                        <AccountSelector selectAcc={selectAccount} updateSelectAcc={setSelectetAccount} />
                    </View>
                    <View style={style.formHolder}>
                        {/* form */}
                        <View style={style.formRow}>
                            <InputFeild titel={"Email"} valueSetter={setEmail} placeholderText={"Enter Email Address"} />
                        </View>
                        <View style={style.formRow}>
                            <InputFeild titel={"Password"} valueSetter={setPassword} placeholderText={"Enter password"} />
                        </View>

                    </View>
                    <View style={style.buttonHolder}>
                        {/* button */}
                        <Button onClick={formValidation} btnText={"SignIn"} bgColour={"#00CEC9"} txtColour={"#FFF"} />
                    </View>
                    <View style={style.naviLinkHolder}>
                        {/* signup view */}
                        <TouchableOpacity onPress={handelSingInNavigation}>
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
        alignItems: 'center',
        justifyContent: 'center'
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
        justifyContent: 'center'
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
        height: '28%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formRow: {
        width: '100%',
        height: '30%',
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

export default AuthScreen;