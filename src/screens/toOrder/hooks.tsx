import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {requests} from '../../api/requests';
import {ROUTES} from '../../navigation/ROUTES';
export const usesOrderScreenHook = () => {
  const [loading, setLoading] = useState(false);
  let navigation = useNavigation();
  let onOrderPress = async () => {
    setLoading(true);
    try {
      const activeOrders = await requests.getHistory.getActive();
      // const hash = await AsyncStorage.getItem('QRCODE');
      if (activeOrders.data?.orders?.length > 0) {
        // try {
        //   const res = await requests.order.getOrderByHash(hash);
        //   if (res.data.status !== 0) {
        //     await AsyncStorage.removeItem('QRCODE');
        //     setLoading(false);
        //     navigation.navigate(ROUTES.TOORDER2);
        //     return;
        //   }
        // } catch (error) {}
        // setLoading(false);
        setLoading(false);
        navigation.navigate(ROUTES.QRCODEONE, {
          order: activeOrders.data?.orders[0],
        });
      } else {
        setLoading(false);
        navigation.navigate(ROUTES.TOORDER2);
      }
    } catch (error) {}
  };
  let onAdditionalPress = () => {
    navigation.navigate(ROUTES.ADDITIONAL);
  };
  return {onOrderPress, onAdditionalPress, loading};
};
