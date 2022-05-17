import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ROUTES} from '../../navigation/ROUTES';

export const ComparativeActOneHooks = () => {
  let navigate = useNavigation();
  // const onPress = ()=>{
  //     navigate.popToTop()
  // }
  const onMyOrderPress = () => {
    navigate.navigate(ROUTES.MYORDERS);
  };

  return {onMyOrderPress};
};
