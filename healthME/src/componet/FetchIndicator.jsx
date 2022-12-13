/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

const FetchIndicator = () => {
    return (
        <View style={style.main}>
            <View style={style.activityindicator_view}>
                <ActivityIndicator animating size="large" color="#F5FCFF" />
                <Text
                    style={{
                        color: "#000000"
                    }}
                >
                    loading
                </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.8,
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    activityindicator_view: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        opacity: 1,
        borderRadius: 20
    }
});
export default FetchIndicator;