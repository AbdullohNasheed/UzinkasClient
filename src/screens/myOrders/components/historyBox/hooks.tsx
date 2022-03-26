import {StackActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {ROUTES} from '../../../../navigation/ROUTES';
export const ComparativeHooks = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(ROUTES.COMPARATIVE);
  };
  return {onPress};
};