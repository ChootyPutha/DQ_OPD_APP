/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { Function_GetAppoinmentListByPaientID } from '../../../api/apiCall';
import FetchIndicator from "../../../componet/FetchIndicator";

const MyAppoinmentHistoryScreen = () => {

    const [myAppoinment, setMyAppoinment] = useState([]);
    const [fetchIndicatorVisible, setFetchIndicatorVisble] = useState(false);

    useEffect(() => {
        fetchPatientAppoinmentHistory();
    }, []);

    async function fetchPatientAppoinmentHistory() {
        setFetchIndicatorVisble(true);
        try {
            Function_GetAppoinmentListByPaientID(global.keys).then((result) => {
                if (result.code == "200") {
                    
                    setMyAppoinment(result.responce);
                    setFetchIndicatorVisble(false);
                } else {
                    setMyAppoinment([]);
                    setFetchIndicatorVisble(false);
                }
            }).catch((err) => {
                console.log("err " + err);
                setFetchIndicatorVisble(false);
            });
        } catch (error) {
            console.log("error" + error);
            setFetchIndicatorVisble(false);
        }
    }

    return (
        <View style={style.main}>
            <View style={style.mainContainer}>
                <View style={style.titelHolder}>
                    <Text style={style.headderText}>{"My Appointment \nHistory"}</Text>
                </View>
                <View style={style.dataLoaderHolder}>
                    <View style={style.listpolulteHolder}>
                        {
                            (myAppoinment.length > 0) ?
                                myAppoinment.map((appoinment) => {
                                    return (
                                        <View style={style.singleItemHolder}>
                                            <View style={style.infoViewholder}>
                                                <View style={style.DocNameHolder}>
                                                    <Text style={[style.docNameText, { color: '#000' }]}>{appoinment.appoinmentNumber}</Text>
                                                </View>
                                                <View style={style.seplistHolder}>
                                                    <Text style={[style.speNameText, { color: '#000' }]}>{"Appoinment Time "+appoinment.appoinmentTime}</Text>
                                                </View>
                                                <View style={style.buttonView}>
                                                    {/* <View style={[style.buttonHolder,{height : '50%'}]}>
                                        <Text style={style.docNameText}>Book an appointment</Text>
                                    </View> */}
                                                    <View style={[style.apoinmentHolder, { height: '30%' }]}>
                                                        <Text style={style.speNameText}>{"Appoinment Status "+appoinment.appoinmentStatus}</Text>
                                                    </View>
                                                </View>

                                            </View>
                                        </View>
                                    )
                                })
                                :
                                <Text style={style.erortext}>No Appoinment recode found</Text>
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
        height: "20%",
        justifyContent: 'center',
    },
    dataLoaderHolder: {
        width: "96%",
        height: "80%",
        //justifyContent: 'center',
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
        height: "90%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    singleItemHolder: {
        width: "96%",
        height: "18%",
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

export default MyAppoinmentHistoryScreen;