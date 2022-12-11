import React from "react";
import { View, StyleSheet, Text, SafeAreaView, Image } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={style.main}>
            <View style={style.mainContainer}>
                <View>
                    <Text style={style.headderText}>Find Your Desired
                        Doctor</Text>
                </View>


                <View>
                    <View>
                        {/* serch view */}
                    </View>

                    <View>
                        <View>
                            <View>
                                {/* icon */}
                            </View>
                            <View>
                                <View>
                                    <Text>Doc Name</Text>
                                </View>
                                <View>
                                    <Text>Specalist</Text>
                                </View>
                                <View>
                                    <Text>Appinrmnt Date and Time</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>


        </View>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    mainContainer: {
        width: "100%",
        height: "100%",
        justifyContent: 'center'
    },
    headderText: {
        fontFamily: 'UbuntuMono-Bold',
        fontSize: 30,
        color: '#00CEC9'
    }
});

export default HomeScreen;