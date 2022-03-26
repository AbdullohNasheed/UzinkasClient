import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { ROUTES } from '../../../../../../navigation/ROUTES';

export const HistoryOrderHooks = () => {
  let navigation = useNavigation();
  let onOrderPress =()=>{
      navigation.navigate(ROUTES.TOORDER)
  }
  return{onOrderPress}
};
