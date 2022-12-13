/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-hooks/rules-of-hooks */
import {useNavigation} from '@react-navigation/native';

const navigation = useNavigation();

export const navigateTimeOutLoginHook = pathName => {
  setTimeout(() => {
    // calling naviagte to login
    navigation.navigate(pathName);
  }, 3000);
}

// function navigateTimeOutLoginHook(pathName) {
  
// }

export const navigationHook = pathName => {
  navigation.navigate(pathName);
}

// function navigationHook(pathName) {
  
// }

// export {navigateTimeOutLoginHook};
// export {navigationHook};
