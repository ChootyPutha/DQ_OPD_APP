/* eslint-disable prettier/prettier */
import {
    Function_PatientSignIn,
    Function_AdminSignIn,
} from '../../../api/apiCall';

export function Funtion_Sigin(email, password, type) {
    // eslint-disable-next-line eqeqeq

    let obj = {
        data : [],
        type : "error",
        status : false,
    }
    if (type === 'PA') {
        //caliing patien api
        try {
            Function_PatientSignIn(email, password, type).then((result) => {
                if(result.code == "200"){
                    //auth success
                    obj = {
                        data : result.responce,
                        type : "success",
                        status : false

                    }
                    return obj;
                }else{
                    // auth failed
                    return obj;
                }
            }).catch((e) => {
                console.log("api " + e);
                return obj;
                //error
            })
        } catch (error) {
            console.log("error " + error);
            return obj;
            //error
        }
    } else {
        // caling admin api
        try {
            Function_AdminSignIn(email, password, type).then((result) => {
                if(result.code == "200"){
                    //auth success
                    obj = {
                        data : result.responce,
                        type : "success",
                        status : false

                    }
                    return obj;
                }else{
                    // auth failed
                    return obj;
                }
            }).catch((e) => {
                console.log("api " + e);
                return obj;
                //error
            })
        } catch (error) {
            console.log("error " + error);
            return obj;
            //error
        }
    }
}
