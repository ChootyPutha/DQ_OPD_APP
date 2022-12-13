/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Funtion_GetALLChannelInfo, Function_AddApointment } from '../../../api/apiCall';
import FetchIndicator from "../../../componet/FetchIndicator";

const HomeScreen = ({ }) => {

    const [channelList, setChannelList] = useState([]);
    const [fetchIndicatorVisible, setFetchIndicatorVisble] = useState(false);


    useEffect(() => {
        fetchChannelInfo();
    }, []);


    function fetchChannelInfo() {
        setFetchIndicatorVisble(true);
        try {
            Funtion_GetALLChannelInfo().then((result) => {
                if (result.code == "200") {

                    setChannelList(result.responce);
                    setFetchIndicatorVisble(false);
                } else {
                    setChannelList([]);
                    setFetchIndicatorVisble(false);
                }
            }).catch((er) => {
                setFetchIndicatorVisble(false);
                console.log("err" + er);
            });
        } catch (error) {
            setFetchIndicatorVisble(false);
            console.log("error " + error);
        }
    }

    async function createAppoinemnt(channel) {
        try {
            setFetchIndicatorVisble(true);
            Function_AddApointment(channel._id, global.keys, channel.channelDate, channel.startTime, (parseInt(channel.countChannel) + 1), "Pending").then((result) => {
                console.log("result " + JSON.stringify(result.responce));
                if (result.code == "200") {
                    setFetchIndicatorVisble(false);
                    alert("Successfully create appointment");
                } else {
                    setFetchIndicatorVisble(false);
                    alert("Unable to create appoinment, try again");
                }
            }).catch((err) => {
                setFetchIndicatorVisble(false);
                console.log("err " + err);
                alert("somthing went wrong, try again");
            });
        } catch (error) {
            setFetchIndicatorVisble(false);
            console.log("error " + error);
            alert("somthing went wrong, try again");
        }
    }

    return (
        <SafeAreaView style={style.main}>
            <View style={style.mainContainer}>
                <View style={style.mainContainer}>
                    <View style={style.titelHolder}>
                        <Text style={style.headderText}>{"Find Your Desired \nDoctor"}</Text>
                    </View>
                    <View style={style.dataLoaderHolder}>
                        {/* <View style={style.serchViewHolder}>
                        <FilterInput />
                    </View> */}

                        <View style={style.listpolulteHolder}>

                            {
                                (channelList.length > 0) ?
                                    channelList.map((chanel) => {
                                        return (
                                            <TouchableOpacity style={style.TouchItem} onPress={() => { createAppoinemnt(chanel); }}>
                                                <View style={style.singleItemHolder}>
                                                    <View style={style.infoViewholder}>
                                                        <View style={style.DocNameHolder}>
                                                            <Text style={[style.docNameText, { color: '#000' }]}>{chanel.docsInfo[0].doctorName}</Text>
                                                        </View>
                                                        <View style={style.seplistHolder}>
                                                            <Text style={[style.speNameText, { color: '#000' }]}>{chanel.docsInfo[0].doctorType}</Text>
                                                        </View>
                                                        <View style={style.buttonView}>
                                                            <View style={[style.buttonHolder, { height: '50%' }]}>
                                                                <Text style={style.docNameText}>Book an appointment</Text>
                                                            </View>
                                                            <View style={[style.apoinmentHolder, { height: '30%' }]}>
                                                                <Text style={style.speNameText}>{chanel.channelDate + " on " + chanel.startTime + " To " + chanel.endTime}</Text>
                                                            </View>
                                                        </View>

                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })
                                    :
                                    <Text style={style.erortext}>No Channel Avalible now</Text>
                            }


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
        </SafeAreaView>
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
        alignItems: 'center'
    },
    headderText: {
        fontFamily: 'UbuntuMono-Bold',
        fontSize: 30,
        color: '#00CEC9'
    },
    titelHolder: {
        width: "96%",
        height: "15%",
        justifyContent: 'center',

    },
    dataLoaderHolder: {
        width: "96%",
        height: "85%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    serchViewHolder: {
        width: "96%",
        height: "10%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    listpolulteHolder: {
        width: "96%",
        height: "100%",
        alignItems: 'center',
    },
    ScrollViews: {
        width: "96%",
        height: "100%",
    },
    TouchItem: {
        width: '90%',
        height: '20%',
        alignItems: 'center',
        margin: 5,
    },
    singleItemHolder: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6C5CE71F',
        borderRadius: 10,
    },
    infoViewholder: {
        width: "94%",
        height: "96%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    DocNameHolder: {
        width: "94%",
        height: "25%",
        justifyContent: 'center',
    },
    docNameText: {
        fontFamily: 'UbuntuMono-Bold',
        fontSize: 20,
        color: '#fff'
    },
    seplistHolder: {
        width: "94%",
        height: "20%",
        justifyContent: 'center',
    },
    speNameText: {
        fontFamily: 'UbuntuMono-Bold',
        fontSize: 14,
        color: '#fff'
    },
    apoinmentHolder: {
        width: "94%",
        height: "20%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonHolder: {
        width: "94%",
        height: "30%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonView: {
        width: "98%",
        height: "50%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#00CEC9'
    },
    erortext: {
        fontFamily: 'UbuntuMono-Bold',
        fontSize: 18,
        color: '#c44569'
    }
});

export default HomeScreen;