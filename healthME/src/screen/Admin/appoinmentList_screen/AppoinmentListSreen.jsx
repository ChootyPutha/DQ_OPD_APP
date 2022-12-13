/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";

import { View, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import { Function_GetAppoinmentListByChannelID } from '../../../api/apiCall';

const AppoinmentListScreen = ({ navigation, route }) => {

    const [appoinmentList, setAppoinmentList] = useState([]);
    const [appoinmentId, setAppoinmentId] = useState("");
    const [channelId, setChannelId] = useState(route.params?.chanelInfo._id);


    useEffect(() => {
        fetchAppoinmantListInfo();
    }, []);


    async function fetchAppoinmantListInfo() {
        try {
            Function_GetAppoinmentListByChannelID(channelId).then((result) => {
                //console.log("datas " + JSON.stringify(result.responce));
                if (result.code == "200") {
                    setAppoinmentList(result.responce);

                } else {
                    setAppoinmentList([]);
                }
            }).catch((err) => {
                console.log("error " + err);

            });
        } catch (error) {
            console.log("error " + error);
        }
    }


    return (
        <SafeAreaView style={style.main}>
            <View style={style.mainHolder}>
                <View style={style.mainHolder}>
                    <View style={style.titelHodler}>
                        <Text style={style.titelText}>Appoinment List</Text>
                    </View>
                    <View style={style.ListHodler}>
                        <ScrollView style={style.scrollVuews} contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
                            <View style={style.ListViewsContainer}>
                                {
                                    (appoinmentList.length > 0) ?
                                        appoinmentList.map((appoinment) => {
                                            return (
                                                <View style={style.singleListItem}>
                                                    <View style={style.litItemDetailView}>
                                                        <View style={style.listItemTitelHolder}>
                                                            <Text style={style.ListTitelText}>{"Number " + appoinment.appoinmentNumber}</Text>
                                                        </View>
                                                        <View style={style.listItemSpeciltyHolder}>
                                                            <Text style={style.listSpeciltyText}>{"Appoinmnt Time " + appoinment.appoinmentTime}</Text>
                                                        </View>
                                                        <View style={style.listItemDateHolder}>
                                                            <Text style={style.listItemdateText}>{"Name " + appoinment.patientsInfo.name}</Text>
                                                        </View>
                                                        <View style={style.listItemDateHolder}>
                                                            <Text style={style.listItemdateText}>{"Email " + appoinment.patientsInfo.email}</Text>
                                                        </View>
                                                        <View style={style.listItemDateHolder}>
                                                            <Text style={style.listItemdateText}>{"Mobile " + appoinment.patientsInfo.mobile}</Text>
                                                        </View>
                                                    </View>

                                                </View>
                                            )
                                    })
                                    :
                                    <Text style={style.nodataText}>No Appoinment for this channel</Text>
                                }
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainHolder: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titelHodler: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
    },
    titelText: {
        fontFamily: 'UbuntuMono-Bold',
        fontSize: 30,
        color: '#00CEC9',
        marginLeft: 20
    },
    nodataText: {
        fontFamily: 'UbuntuMono-Bold',
        fontSize: 20,
        color: '#c44569',
        marginLeft: 20
    },
    ListHodler: {
        width: '100%',
        height: '85%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollVuews: {
        width: '100%',
        height: '100%',
    },
    ListViewsContainer: {
        width: '96%',
        height: '95%',
        alignItems: 'center',
    },
    singleListItem: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#f5cd7999',//
        margin: 5

    },
    singleListItemTouch: {
        width: '90%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    litItemDetailView: {
        width: '90%',
        height: '95%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listLitemIconView: {
        width: '20%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItemTitelHolder: {
        width: '96%',
        height: '20%',
        justifyContent: 'center',
    },
    listItemSpeciltyHolder: {
        width: '96%',
        height: '15%',
        justifyContent: 'center',
    },
    listItemDateHolder: {
        width: '96%',
        height: '15%',
        justifyContent: 'center',
    },
    ListTitelText: {
        fontFamily: 'UbuntuMono-Bold',
        fontSize: 20,
        color: '#000'
    },
    listSpeciltyText: {
        fontFamily: 'UbuntuMono-Bold',
        fontSize: 14,
        color: '#000'
    },
    listItemdateText: {
        fontFamily: 'UbuntuMono-Bold',
        fontSize: 14,
        color: '#00CEC9'
    }
});

export default AppoinmentListScreen;