/* eslint-disable prettier/prettier */
import {Funition_AddChannel} from '../../../../api/apiCall';


export function createNewChannel (doc,channeldate,stTime,edTime,duraton,count){
    let obj = {
        data : [],
        type : "error",
        status : false,
    }

    try {
        Funition_AddChannel(doc,channeldate,stTime,edTime,duraton,count).then((result)=>{
            if(result.code === "200"){
                obj = {
                    data : result.responce,
                    type : "success",
                    status : false

                }
                return obj;
            }else{
                return obj;
            }
        }).catch((e)=>{
            console.log("api " + e);
            return obj;
        });
    } catch (error) {
        console.log("error " + error);
        return obj;
    }
}