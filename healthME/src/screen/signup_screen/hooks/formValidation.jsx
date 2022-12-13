/* eslint-disable prettier/prettier */
function passwordMatch(password, confimPass) {
  if (password === confimPass) {
    return true;
  } else {
    return false;
  }
}

function validEmailAddress(email) {
  let expression =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (expression.test(email)) {
    return true;
  } else {
    return false;
  }
}

export {passwordMatch};
export {validEmailAddress};