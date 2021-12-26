import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './ROUTES';
import {ChoosingScreen} from '../screens/choosing';
import {ContractScreen} from '../screens/contract';
import {ApplicationScreen} from '../screens/application';
import {ApplicationFromScreen} from '../screens/applicationForm';
import Tabs from './Tab';
import {LoginScreen} from '../screens/login';
import {RegisterScreen} from '../screens/register';
import {PinCodScreen} from '../screens/pincod';
import {InformationScreen} from '../screens/information';
import {QrKodScreen} from '../screens/qrKod';
import {DataScreen} from '../screens/data';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.AUTH_PROMPT} component={ChoosingScreen} />
      <Stack.Screen name={ROUTES.HAS_CONTRACT} component={ContractScreen} />
      <Stack.Screen name={ROUTES.APPLICATION} component={ApplicationScreen} />
      <Stack.Screen
        name={ROUTES.APPLICATION_FORM}
        component={ApplicationFromScreen}
      />
      <Stack.Screen name={ROUTES.QRKOD} component={QrKodScreen} />
      <Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={ROUTES.PINCODE} component={PinCodScreen} />
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.HOME_TABS} component={Tabs} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
