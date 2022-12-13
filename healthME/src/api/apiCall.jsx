/* eslint-disable prettier/prettier */
const BASE_URL = "http://192.168.8.103:8000/api";

const Function_PatientSignIn = async (email, pass, type) => {
    var url = BASE_URL + "/auth/patient";
    var dt = JSON.stringify({
        "email": email,
        "password": pass,
        "type" : type,
    });
    try {
        let responce = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: dt
        });
        let code = responce.status;
        //console.log("reponse "+ await responce.text());
        let responce_Values = await responce.json();
        var data = {
            "code": code,
            "responce": responce_Values
        }
        return data;

    } catch (error) {
        console.log("error on funtion_patient_signup : " + error);
    }
}

const Function_AdminSignIn = async (email, pass, type) => {
    var url = BASE_URL + "/auth/admin";
    var dt = JSON.stringify({
        "email": email,
        "password": pass,
        "type" : type,
    });
    try {
        let responce = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: dt
        });
        let code = responce.status;
        //console.log("reponse "+ await responce.text());
        let responce_Values = await responce.json();
        var data = {
            "code": code,
            "responce": responce_Values
        }
        return data;

    } catch (error) {
        console.log("error on funtion_patient_signup : " + error);
    }
}


const Function_PatientSiginUp = async (email, pass, repass, mobile, name) => {
    var url = BASE_URL + "/user";
    var dt = JSON.stringify({
        "email": email,
        "password": pass,
        "confirmPassowrd": repass,
        "mobile": mobile,
        "name" : name
    });
    try {
        let responce = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: dt
        });
        let code = responce.status;
        //console.log("reponse "+ await responce.text());
        let responce_Values = await responce.json();
        var data = {
            "code": code,
            "responce": responce_Values
        }
        return data;

    } catch (error) {
        console.log("error on funtion_patient_signup : " + error);
    }
};

const Function_AdminSiginUp = async(email, pass, repass, mobile, name) => {
    var url = BASE_URL + "/admin";
    var dt = JSON.stringify({
        "email": email,
        "password": pass,
        "confirmPassowrd": repass,
        "mobile": mobile,
        "name" : name
    });
    try {
        let responce = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: dt
        });
        let code = responce.status;
        //console.log("reponse "+ await responce.text());
        let responce_Values = await responce.json();
        console.log("response "+JSON.stringify(responce_Values));
        var data = {
            "code": code,
            "responce": responce_Values
        }
        return data;

    } catch (error) {
        console.log("error on funtion_admin_signup : " + error);
    }
}

const Funtion_GetALLChannelInfo = async () => {
    var url = BASE_URL + "/channel";
    try {
        let responce = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let code = responce.status;
        //console.log("reponse "+ await responce.text());
        let responce_Values = await responce.json();
        var data = {
            "code": code,
            "responce": responce_Values
        }
        return data;

    } catch (error) {
        console.log("error on funtion_patient_signup : " + error);
    }
}

const Function_AddApointment = async (channel,patient,appoinmentDate,appoinmentTime,appoinmentNumber,appoinmentStatus) => {
    var url = BASE_URL + "/appoinment";
    var dt = JSON.stringify({
        "channel": channel,
        "patient": patient,
        "appoinmentDate": appoinmentDate,
        "appoinmentTime": appoinmentTime,
        "appoinmentNumber" : appoinmentNumber,
        "appoinmentStatus" : appoinmentStatus
    });
    try {
        let responce = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: dt
        });
        let code = responce.status;
        //console.log("reponse "+ await responce.text());
        let responce_Values = await responce.json();
        var data = {
            "code": code,
            "responce": responce_Values
        }
        return data;

    } catch (error) {
        console.log("error on funtion_admin_signup : " + error);
    }
}

const Funition_AddChannel = async (doc, channeldate, stTime, edTime,duraton, count) => {
    var url = BASE_URL + "/channel";
    var dt = JSON.stringify({
        "doctor": doc,
        "channelDate": channeldate,
        "startTime": stTime,
        "endTime": edTime,
        "duration" : parseInt(duraton),
        "countChannel" : parseInt(count),
    });
    try {
        let responce = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: dt
        });
        let code = responce.status;
        //console.log("reponse "+ await responce.text());
        let responce_Values = await responce.json();
        var data = {
            "code": code,
            "responce": responce_Values
        }
        return data;

    } catch (error) {
        console.log("error on funtion_admin_signup : " + error);
    }
}

const Function_GetDoctorsInfo = async () => {
    var url = BASE_URL + "/doctor";
    try {
        let responce = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let code = responce.status;
        //console.log("reponse "+ await responce.text());
        let responce_Values = await responce.json();
        var data = {
            "code": code,
            "responce": responce_Values
        }
        return data;

    } catch (error) {
        console.log("error on funtion_patient_signup : " + error);
    }
}

const Function_GetAppoinmentListByChannelID = async (chanelID) => {
    var url = BASE_URL + `/appoinment/${chanelID}`;
    try {
        let responce = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let code = responce.status;
        //console.log("reponse "+ await responce.text());
        let responce_Values = await responce.json();
        var data = {
            "code": code,
            "responce": responce_Values
        }
        return data;

    } catch (error) {
        console.log("error on funtion_appoinment by channel : " + error);
    }
}



export {Function_PatientSignIn};
export {Function_AdminSignIn};
export {Function_PatientSiginUp};
export {Function_AdminSiginUp};
export {Funtion_GetALLChannelInfo};
export {Function_AddApointment};
export {Funition_AddChannel};
export {Function_GetDoctorsInfo};
export {Function_GetAppoinmentListByChannelID};




