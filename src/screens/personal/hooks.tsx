import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../../navigation/ROUTES';
import {InformationScreen} from '../information';
import {HomeScreen} from '../home';
import {PersonalScreen} from '.';
import {NotifictionScreen} from '../ notifications';
import {CancelScreen} from '../ cancel';
import {DataScreen} from '../data';
import {ToOrderScreen} from '../toOrder';
import {OrderAccordingScreen} from '../orderAccording';
import {AdditionalScreen} from '../additional';
import {QrKodScreen} from '../qrKod';
import {MyOrderScreen, MyOrdersScreen} from '../myOrders';
import { ComparativeScreen } from '../comparative';
import { HistoryBoxScreen } from '../myOrders/components/historyBox';
import { ComparativeActScreen } from '../ comparativeAct';
import HomeStack from '../../navigation/HomeStack';
export const usePersonalScreenHook = () => {
  let navigation = useNavigation();
  let onInfarmationPress = () => {
    navigation.navigate(ROUTES.INFARMATION);
  };
  let onNotificationPress = () => {
    navigation.navigate(ROUTES.NOTIFICATION);
  };
  let onToOrderPress = () => {
    navigation.navigate(ROUTES.TOORDER);
  };
  let onCancelonPress = () => {
    navigation.navigate(ROUTES.CANCEL);
  };
  let onMyOrdersPress = () => {
    navigation.navigate(ROUTES.MYORDERS);
  };
  return {
    onInfarmationPress,
    onNotificationPress,
    onCancelonPress,
    onToOrderPress,
	onMyOrdersPress,
  };
};

let Stack = createNativeStackNavigator();

export default function PersonalStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.HOME_TABS} component={PersonalScreen} />
      <Stack.Screen name={ROUTES.COMPARATIVE} component={ComparativeScreen} />
      <Stack.Screen name={ROUTES.HISTORY} component={HistoryBoxScreen} />
      <Stack.Screen name={ROUTES.INFARMATION} component={InformationScreen} />
      <Stack.Screen name={ROUTES.NOTIFICATION} component={NotifictionScreen} />
      <Stack.Screen name={ROUTES.CANCEL} component={CancelScreen} />
      <Stack.Screen name={ROUTES.DATA} component={DataScreen} />
      <Stack.Screen name={ROUTES.TOORDER} component={ToOrderScreen} />
      <Stack.Screen name={ROUTES.TOORDER2} component={OrderAccordingScreen} />
      <Stack.Screen name={ROUTES.ADDITIONAL} component={AdditionalScreen} />
      <Stack.Screen
        name={ROUTES.COMPARATIVEACT}
        component={ComparativeActScreen}
      />
      <Stack.Screen name={ROUTES.MYORDERS} component={MyOrdersScreen} />
    </Stack.Navigator>
  );
}
