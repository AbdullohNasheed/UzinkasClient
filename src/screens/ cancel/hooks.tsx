import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ROUTES} from '../../navigation/ROUTES';

export const CancelHook = () => {
  let navigate = useNavigation();
  const onOrderList = () => {
    navigate.navigate(ROUTES.ORDERLIST);
  };
  return {onOrderList};
};
