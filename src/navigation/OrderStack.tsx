import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './ROUTES';
import {ToOrderScreen} from '../screens/toOrder';

const Stack = createNativeStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.TOORDER} component={ToOrderScreen} />
      {/* <Stack.Screen name={ROUTES.QRKOD} component={QrKodScreen} /> */}
    </Stack.Navigator>
  );
};

export default OrderStack;

const styles = StyleSheet.create({});
