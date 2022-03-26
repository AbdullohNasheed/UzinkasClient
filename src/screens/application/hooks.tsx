import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {requests} from '../../api/requests';
import {PartnerRequest} from '../../api/types';
import {ROUTES} from '../../navigation/ROUTES';

export const useApplicationScreenHook = () => {
  const [partner, setPartner] = useState<PartnerRequest>({
    customer_name: '',
    email: '',
    phone_number: '',
    name_organization: '',
  });
  const navigation = useNavigation();
  const effect = async () => {
    try {
      let res = await requests.partner.creatPartner(partner);
      console.log(res.data);
      navigation.navigate(ROUTES.AUTH_PROMPT);
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (key: keyof PartnerRequest) => (value: string) => {
    setPartner({...partner, [key]: value});
  };
  const onFillPress = () => {
    navigation.navigate(ROUTES.APPLICATION_FORM, {partner});
  };
  const onSendPress = () => {
    effect();
  };
  return {partner, onFillPress, onSendPress, handleChange};
};
