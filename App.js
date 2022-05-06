/* eslint-disable prettier/prettier */
import {StatusBar} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={'#383838'} />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}
