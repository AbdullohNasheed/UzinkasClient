// import { useNavigation } from "@react-navigation/core";
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ROUTES} from '../../navigation/ROUTES';
export const useKodScreenHook = () => {
  let navigation = useNavigation();
  let onCenceelonPress = () => {
    navigation.navigate(ROUTES.HOME_TABS);
  };

  return {onCenceelonPress};
};

// };
