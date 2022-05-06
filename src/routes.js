/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Oferta from './screens/Oferta';
import Humorada from './screens/Humorada';
import Cupom from './screens/Cupom';
import Default from './screens/Default';
import { notificationManager } from './services/NotificationManager';

const Stack = createNativeStackNavigator();

export default function Routes() {

  let localNotify = notificationManager;

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home">
        { ({navigation}) => {
          localNotify.setNavigator(navigation);
          return (<Home />); }}
      </Stack.Screen>
      <Stack.Screen name="Oferta">
        { (navigation) => { return (<Oferta />); }}
      </Stack.Screen>
      <Stack.Screen name="Humorada">
        { (navigation) => { return (<Humorada />); }}
      </Stack.Screen>
      <Stack.Screen name="Cupom">
        { (navigation) => { return (<Cupom />); }}
      </Stack.Screen>
      <Stack.Screen name="Default">
        { (navigation) => { return (<Default />); }}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
