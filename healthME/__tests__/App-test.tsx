/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import RootStack from '../src/navigation/Navigation';
import { NavigationContainer } from "@react-navigation/native";

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
