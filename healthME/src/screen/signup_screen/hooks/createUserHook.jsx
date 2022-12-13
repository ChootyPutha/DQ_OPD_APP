const {
  Function_PatientSiginUp,
  Function_AdminSiginUp,
} = require('../../../api/apiCall');

function createPaientAccount(email, password, repassword, mobile, name) {
  Function_PatientSiginUp(email, password, repassword, mobile, name)
    .then(responseObj => {
      if (responseObj.code == '200') {
        return true;
      } else {
        return false;
      }
    })
    .catch(err => {
      console.log('error on api call ' + err);
      return false;
    });
}

function createAdminAccount(email, password, repassword, mobile, name) {
  Function_AdminSiginUp(email, password, repassword, mobile, name)
    .then(responseObj => {
      if (responseObj.code == '200') {
        return true;
      } else {
        return false;
      }
    })
    .catch(err => {
      console.log('error on api call ' + err);
      return false;
    });
}

export {createPaientAccount};
export {createAdminAccount};
