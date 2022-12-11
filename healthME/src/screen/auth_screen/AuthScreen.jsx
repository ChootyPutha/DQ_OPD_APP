import React from "react";
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';

const AuthScreen = () => {
    return(
        <View style={style.main}>
            <View style={style.mainContainer}>
                <View>
                    {/* icon here */}
                </View>
                <View>
                    {/* titel here */}
                </View>
                <View>
                    {/* account type view */}
                </View>
                <View>
                    {/* form */}
                </View>
                <View>
                    {/* button */}
                </View>
                <View>
                    {/* signup view */}
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    main : {
        flex : 1,
        backgroundColor : '#fff',
        alignItems : 'center',
        justifyContent : 'center'
    },
    mainContainer : {
        width : '100%',
        height : '100%',
        alignItems : 'center'
    }
});

export default AuthScreen;