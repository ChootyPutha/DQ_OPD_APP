/* eslint-disable prettier/prettier */
import {Funtion_GetALLChannelInfo} from '../../../../api/apiCall';

export const fetchChannelList = async() => {
    let channelList = [];
    try {
        await Funtion_GetALLChannelInfo().then((result)=>{
            console.log("dats "+JSON.stringify(result.responce));
            if(result.code == "200"){
                channelList = result.responce;
                console.log("channel list "+JSON.stringify(result.responce));
                return channelList;
            }else{
                return channelList;
            }
        }).catch((err)=>{
            console.log("error "+err);
            return channelList;
        });
    } catch (error) {
        console.log("error "+error);
        return channelList;
    }
}