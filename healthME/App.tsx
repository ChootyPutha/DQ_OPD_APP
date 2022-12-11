/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



// import RootStack from './src/navigation/Navigation';
import AuthScreen from "./src/screen/auth_screen/AuthScreen";

const App = () => {
  return (
    <AuthScreen/>
  );
};

export default App;
