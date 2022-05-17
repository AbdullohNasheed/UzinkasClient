import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {PersonalScreen} from '../screens/personal';
import {ROUTES} from './ROUTES';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.PERSONAL} component={PersonalScreen} />
    </Stack.Navigator>
  );
};

export default {HomeStack};
