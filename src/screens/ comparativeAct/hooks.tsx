import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ROUTES} from '../../navigation/ROUTES';

export const ComparativeActHooks = () => {
  let navigate = useNavigation();
  // const onPress = ()=>{
  //     navigate.popToTop()
  // }
  const onListPress = () => {
    navigate.navigate(ROUTES.LIST);
  };

  return {onListPress};
};
