// import { useNavigation } from "@react-navigation/core";
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ROUTES} from '../../navigation/ROUTES';
export const useKodScreenHook = () => {
  let navigation = useNavigation();
  const onOrderAdditionalPress = () => {
    navigation.navigate(ROUTES.ORDERADITIONAL);
  };
  const onBackPress = () => {
    navigation.goBack();
  };

  return {onBackPress, onOrderAdditionalPress};
};

// };
