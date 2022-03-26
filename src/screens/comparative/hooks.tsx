import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ROUTES} from '../../navigation/ROUTES';

export const ComparativeOneHooks = () => {
  let navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(ROUTES.COMPARATIVEACT);
  };
  return {onPress};
};
