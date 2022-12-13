/* eslint-disable prettier/prettier */
import React,{useState} from "react";

import {View, StyleSheet, Text, } from 'react-native';
import InputFeild from "../../../componet/InputFeild";
import Button from "../../../componet/Button";
import { createNewChannel } from "./hooks/createChannelHook";

const CreateChannelScreen = () => {

    const [doctor, setDctor] = useState("");
    const [channelDate, setChannelDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [duration, setDuration] = useState("");
    const [count, setCount] = useState("");


    const validateForm = () => {
        if(doctor != ""){
            if(channelDate != ""){
                if(startTime != ""){
                    if(endTime != ""){
                        if(duration != ""){
                            if(count != ""){
                                handelCreateChannel();
                            }else{
                                alert("Plase enter appoinment count");
                            }  
                        }else{
                            alert("Plase enter single appoinment duration");
                        }
                    }else{
                        alert("Plase enter appoinment end time");
                    }
                }else{
                    alert("Plase enter appoinment  start time");
                }
            }else{  
                alert("Plase select a channel date");
            }
        }else{
            alert("Plase select a Doctor");
        }
    }

    const handelCreateChannel = () => {
        const channelResult = createNewChannel(doctor,channelDate,startTime,endTime,duration,count);

        if(channelResult.type === "success"){

        }else{
            alert("Unable to create channel, plase try again");
        }
    }

    

    return(
        <View style={style.main}>
            <View style={style.mainHolder}>
                <View style={style.titelHolder}>
                    <Text style={style.titelText}>Create New Channel</Text>
                </View>

                <View style={style.formViewHodler}>
                    <View style={style.formRow}>
                        {/* doc dopdown */}
                    </View>
                    <View style={style.formRow}>
                        {/* channel date */}
                    </View>
                    <View style={style.formRow}>
                        {/* start time */}
                    </View>
                    <View style={style.formRow}>
                        {/* end time */}
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
        </View>
    )
}

const style = StyleSheet.create({
    main : {
        flex :1,
        backgroundColor  :'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    mainHolder : {
        width : '100%',
        height : '100%',
        alignItems:'center',
        justifyContent : 'center'
    },
    titelHolder : {
        width : '100%',
        height : '15%',
        alignItems:'center',
        justifyContent : 'center'
    },
    titelText : {
        fontFamily: 'UbuntuMono-Bold',
        fontSize: 30,
        color: '#00CEC9'
    },
    formViewHodler : {
        width : '100%',
        height : '75%',
        alignItems:'center',
        justifyContent : 'center'
    },
    formRow : {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 10
    }


});

export default CreateChannelScreen;