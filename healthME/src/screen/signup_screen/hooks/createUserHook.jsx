/* eslint-disable prettier/prettier */
const {
  Function_PatientSiginUp,
  Function_AdminSiginUp,
} = require('../../../api/apiCall');

function createPaientAccount(email, password, repassword, mobile, name) {

  let obj = {
    data: [],
    type: "error",
    status: false,
  }

  

    return obj;
}

function createAdminAccount(email, password, repassword, mobile, name) {

  let obj = {
    data: [],
    type: "error",
    status: false,
  }

  Function_AdminSiginUp(email, password, repassword, mobile, name)
    .then(responseObj => {
      if (responseObj.code == '200') {
        obj = {
          data: responseObj.responce,
          type: "success",
          status: false,
        }
        return obj;
      } else {
        return obj;
      }
    })
    .catch(err => {
      console.log('error on api call ' + err);
      return obj;
    });

    return obj;
}

export { createPaientAccount };
export { createAdminAccount };
