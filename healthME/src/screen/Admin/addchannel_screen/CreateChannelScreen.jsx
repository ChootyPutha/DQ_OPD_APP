/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";

import { View, StyleSheet, Text, Modal, TouchableOpacity, ScrollView } from 'react-native';
import InputFeild from "../../../componet/InputFeild";
import Button from "../../../componet/Button";
import {Function_GetDoctorsInfo,Funition_AddChannel} from '../../../api/apiCall';

const CreateChannelScreen = () => {

    const [doctor, setDctor] = useState({"name" : "select Doctor"});
    const [channelDate, setChannelDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [duration, setDuration] = useState("");
    const [count, setCount] = useState("");
    const [docList, setDocList] = useState([]);
    const [openDoc, setOpenDoc] = useState(false);

    useEffect(()=>{
        fetchDocInfo();
    },[]);

    const validateForm = () => {
        if (doctor != "") {
            if (channelDate != "") {
                if (startTime != "") {
                    if (endTime != "") {
                        if (duration != "") {
                            if (count != "") {
                                createChannelHandler();
                            } else {
                                alert("Plase enter appoinment count");
                            }
                        } else {
                            alert("Plase enter single appoinment duration");
                        }
                    } else {
                        alert("Plase enter appoinment end time");
                    }
                } else {
                    alert("Plase enter appoinment  start time");
                }
            } else {
                alert("Plase select a channel date");
            }
        } else {
            alert("Plase select a Doctor");
        }
    }

    async function createChannelHandler(){
        try {
            Funition_AddChannel(doctor?._id,channelDate,startTime,endTime,duration,count).then((result)=>{
                //console.log("result "+JSON.stringify(result));
                if(result.code == "200"){
                    alert("Successfully create channel");
                }else{
                    alert("Unable to create channel, plase try again");
                }
            }).catch((e)=>{
                console.log("api " + e);
                alert("Somthing went wrong, please try again");
                
            });
        } catch (error) {
            console.log("error " + error);
            alert("Somthing went wrong, please try again");
            
        }
    }

    function fetchDocInfo () {
        try {
            Function_GetDoctorsInfo().then((result)=>{
                if(result.code == "200"){
                    setDocList(result.responce);
                }else{

                }
            }).catch((er)=>{
                console.log("error "+er);
            })
        } catch (error) {
            console.log("error "+error);
        }
    }
    return (
        <View style={style.main}>
            <View style={style.mainHolder}>
                <View style={style.titelHolder}>
                    <Text style={style.titelText}>Create New Channel</Text>
                </View>

                <View style={style.formViewHodler}>
                    <View style={style.formRow}>
                        {/* doc dopdown */}
                        <View style={style.holderBackView}>
                            <View style={style.holderBackViewContainer}>
                                <View style={style.backViewTextHolder}>
                                    <Text style={style.holderBackText}>Doctor</Text>
                                </View>
                                <TouchableOpacity style={style.backInputHolders} onPress={() => { setOpenDoc(!openDoc) }}>
                                    <View style={style.backInputHolders}>
                                        <Text style={style.inputTextSty}>{doctor?.doctorName}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <View style={style.formRow}>
                        {/* channel date */}
                        <InputFeild titel={"Appoinment Date"} valueSetter={setChannelDate} placeholderText="Enter Appinment Date" />
                    </View>
                    <View style={style.formRow}>
                        {/* start time */}
                        <InputFeild titel={"Start Time"} valueSetter={setStartTime} placeholderText="Enter Appinment Start Time" />
                    </View>
                    <View style={style.formRow}>
                        {/* end time */}
                        <InputFeild titel={"EndTime"} valueSetter={setEndTime} placeholderText="Enter Appinment End Time" />
                    </View>
                    <View style={style.formRow}>
                        {/* duration */}
                        <InputFeild titel={"Duration"} valueSetter={setDuration} placeholderText="Enter Single Appinment Duration" />
                    </View>
                    <View style={style.formRow}>
                        {/* chanel count */}
                        <InputFeild titel={"Channel Count"} valueSetter={setCount} placeholderText="Enter Appinment Count" />
                    </View>
                    <View style={style.formRow}>
                        {/* button */}
                        <Button txtColour={"#FFF"} bgColour={"#00CEC9"} btnText={"Create Channel"} onClick={validateForm} />
                    </View>

                </View>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={openDoc}
                style={style.modelMain}
                onRequestClose={() => {
                    setOpenDoc(!openDoc);
                }}>
                <View style={style.modelView}>
                    <View style={style.modeHolder}>
                        <View style={style.ModeltitelView}>
                            <Text style={style.ModelTitelText}>Select A Doctor</Text>
                        </View>
                        <View style={style.ModelBody}>
                            <ScrollView style={style.scrollView} contentContainerStyle={{ alignItems: 'center', marginBottom: 10, }}>
                                {
                                    docList.map((doc) => {
                                        return (
                                            <TouchableOpacity style={style.singleTouchView} onPress={() => {setDctor(doc); setOpenDoc(!openDoc);}}>
                                                <View style={style.singleView}>
                                                    <Text style={style.selectDoc}>{doc.doctorName}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        );
                                    })
                                }
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </Modal>

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
    titelHolder: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titelText: {
        fontFamily: 'UbuntuMono-Bold',
        fontSize: 30,
        color: '#00CEC9'
    },
    formViewHodler: {
        width: '100%',
        height: '75%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formRow: {
        width: '100%',
        height: '12%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    inputHolder: {
        width: '96%',
        height: '100%',
        justifyContent: 'center'
    },
    holderBackView: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    holderBackViewContainer: {
        width: '96%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#DFE6E999'
    },
    backViewTextHolder: {
        width: '50%',
        height: '30%',
        position: 'absolute',
        top: -8,
        left: 25
    },
    holderBackText: {
        fontSize: 14,
        fontFamily: 'UbuntuMono-Bold',
        color: '#000'
    },
    backInputHolders: {
        width: '96%',
        height: '100%',
        justifyContent: 'center'
    },
    inutContainer: {
        width: '96%',
        height: '100%',
        justifyContent: 'center'
    },
    modelMain: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modelView: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099'
    },
    modeHolder: {
        width: '80%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    ModeltitelView: {
        width: '90%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ModelTitelText: {
        fontFamily: 'UbuntuMono-Bold',
        fontSize: 20,
        color: '#00CEC9'
    },
    ModelBody: {
        width: '90%',
        height: '75%',
        alignItems: 'center',
    },
    scrollView: {
        width: '100%',

    },
    singleTouchView: {
        width: '98%',
        height: 40,
        alignItems: 'center',
        backgroundColor: '#0000001f',
        borderRadius: 5
    },
    singleView: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 15
    },
    selectDoc: {
        fontFamily: 'UbuntuMono-Bold',
        fontSize: 18,
        color: '#000'
    },
    inputTextSty : {
        fontSize: 16,
        fontFamily: 'UbuntuMono-Bold',
        color: '#000',
        paddingLeft : 10
    }



});

export default CreateChannelScreen;