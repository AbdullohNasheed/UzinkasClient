import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ROUTES } from '../../navigation/ROUTES';

export const ComparativeActHooks = ()=>{
    let navigate = useNavigation();
    const onPress = ()=>{
        navigate.popToTop()
    }
    return{onPress}
}