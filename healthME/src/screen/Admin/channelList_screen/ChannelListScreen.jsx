/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { fetchChannelList } from './hooks/fetchChannelListHooks';
import { Funtion_GetALLChannelInfo } from '../../../api/apiCall';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const ChanelListScreen = () => {

    const navigation = useNavigation();

    const [channelList, setChannelList] = useState([]);

    useEffect(() => {
        fetchChannel();
    }, []);

    async function fetchChannel() {
        try {
            Funtion_GetALLChannelInfo().then((result) => {
                if (result.code == "200") {
                    setChannelList(result.responce);

                } else {
                    setChannelList([]);
                }
            }).catch((err) => {
                console.log("error " + err);

            });
        } catch (error) {
            console.log("error " + error);

        }
    }

    function navigateToAppoinmentList(channel){
        navigation.navigate('AppoinmetList',{ chanelInfo: channel });
    }

    return (
        <View style={style.main}>
            <View style={style.mainHolder}>
                <View style={style.titelHodler}>
                    <Text style={style.titelText}>Channel List</Text>
                </View>
                <View style={style.ListHodler}>
                    <View style={style.ListViewsContainer}>
                        {
                            channelList.map((chanel) => {
                                return (
                                    <TouchableOpacity style={style.singleListItemTouch} onPress={()=>{navigateToAppoinmentList(chanel);}}>
                                        <View style={style.singleListItem}>
                                            <View style={style.litItemDetailView}>
                                                <View style={style.listItemTitelHolder}>
                                                    <Text style={style.ListTitelText}>{chanel.docsInfo[0].doctorName}</Text>
                                                </View>
                                                <View style={style.listItemSpeciltyHolder}>
                                                    <Text style={style.listSpeciltyText}>{chanel.docsInfo[0].doctorType}</Text>
                                                </View>
                                                <View style={style.listItemDateHolder}>
                                                    <Text style={style.listItemdateText}>{chanel.channelDate + " " + chanel.startTime + " To " + chanel.endTime}</Text>
                                                </View>
                                            </View>
                                            <View style={style.listLitemIconView}>
                                                {/* icon */}
                                                <Icon name="right" size={30} color="#000" />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
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
    ListHodler: {
        width: '100%',
        height: '85%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ListViewsContainer: {
        width: '96%',
        height: '95%',
        alignItems: 'center',
    },
    singleListItem: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#f7d79499',

    },
    singleListItemTouch: {
        width: '90%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        margin : 5,

    },
    litItemDetailView: {
        width: '70%',
        height: '90%',
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
        height: '40%',
        justifyContent: 'center',
    },
    listItemSpeciltyHolder: {
        width: '96%',
        height: '15%',
        justifyContent: 'center',
    },
    listItemDateHolder: {
        width: '96%',
        height: '40%',
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

export default ChanelListScreen;