/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import AccountSelector from "../../componet/AccountSelector";
import InputFeild from "../../componet/InputFeild";
import Button from "../../componet/Button";
import { useNavigation } from '@react-navigation/native';
import { validEmailAddress, passwordMatch } from './hooks/formValidation';
import {Function_PatientSiginUp, Function_AdminSiginUp} from '../../api/apiCall';
import FetchIndicator from "../../componet/FetchIndicator";


const SignUpScreen = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [name, setName] = useState("");
    const [confimPass, setConfirmPass] = useState("");
    const [selectAccount, setSelectetAccount] = useState("PA");
    const [fetchIndicatorVisible, setFetchIndicatorVisble] = useState(false);

    const handleSignUpNavigation = () => {
        navigation.navigate('Auth');
    }

    const validFormInput = () => {
        if (email != "") {
            if (validEmailAddress(email)) {
                if (name != "") {
                    if (mobile != "") {
                        if (password != "") {
                            if (confimPass != "") {
                                if (passwordMatch(password, confimPass)) {
                                    handleSignUpAction();
                                } else {
                                    alert("your password doesn't match");
                                }
                            } else {
                                alert("Plase enter confim password");
                            }
                        } else {
                            alert("Plase enter password");
                        }
                    } else {
                        alert("Plase enter mobile number");
                    }
                } else {
                    alert("Plase enter name");
                }
            } else {
                alert("Plase enter valid email address");
            }
        } else {
            alert("Plase enter email");
        }
    }

    const handleSignUpAction = () => {
        if (selectAccount === "PA") {
            setFetchIndicatorVisble(true);
            signupPatient();
        } else if(selectAccount === "AD") {
            setFetchIndicatorVisble(true);
            signupAdmin();
        }else{
            console.log("invalid account type");
        }
    }

    function signupAdmin() {
        try {
            Function_AdminSiginUp(email, password, confimPass, mobile, name)
                .then(responseObj => {
                    if (responseObj.code == '200') {
                        setFetchIndicatorVisble(false);
                        alert("Successfully Admin Signup");
                        navigation.navigate('Auth');

                    } else {
                        setFetchIndicatorVisble(false);
                        alert("Unable to signup, plase try again");
                    }
                })
                .catch(err => {
                    setFetchIndicatorVisble(false);
                    console.log('error on api call ' + err);
                    alert("something went wrong, please try again");

                });
        } catch (error) {
            setFetchIndicatorVisble(false);
            console.log("error " + error);
            alert("something went wrong, please try again");
        }
    }

    function signupPatient() {
        try {
            Function_PatientSiginUp(email, password, confimPass, mobile, name)
                .then(responseObj => {
                    if (responseObj.code == '200') {
                        setFetchIndicatorVisble(false);
                        alert("Successfully Patient Signup");
                        navigation.navigate('Auth');

                    } else {
                        setFetchIndicatorVisble(false);
                        alert("Unable to signup, plase try again");
                    }
                })
                .catch(err => {
                    setFetchIndicatorVisble(false);
                    console.log('error on api call ' + err);
                    alert("something went wrong, please try again");

                });
        } catch (error) {
            setFetchIndicatorVisble(false);
            console.log("error " + error);
            alert("something went wrong, please try again");
        }
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
                        <Button onClick={validFormInput} btnText={"SignUp"} bgColour={"#00CEC9"} txtColour={"#FFF"} />
                    </View>
                    <View style={style.naviLinkHolder}>
                        {/* signup view */}
                        <TouchableOpacity onPress={handleSignUpNavigation}>
                            <Text style={style.navigationLinkText}>SignIn here</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            {
                (fetchIndicatorVisible) ? 
                <FetchIndicator />
                :
                null
            }
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


