import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ROUTES} from '../../navigation/ROUTES';

export const OrderAdditionalHook = () => {
  let navigate = useNavigation();
  const oneComparativePress = () => {
    navigate.navigate(ROUTES.COMPARATIVEONE);
  };
  const onBekPress = () => {
    navigate.goBack();
  };
  return {onBekPress, oneComparativePress};
};
