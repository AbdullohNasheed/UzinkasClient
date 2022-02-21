import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {requests} from '../../api/requests';
import {LoginRequest} from '../../api/types';

export const useLoginScreenHook = () => {
  const [state, setState] = useState<LoginRequest>({
    inn: '',
    location: '',
    number: '',
  });

  let navigation = useNavigation();
  let handleChange = (key: keyof LoginRequest) => (value: string) => {
    console.log({key, value});

    setState({...state, [key]: value});
  };
  let onRegisterPress = async () => {
	  try {
		  let res = await requests.auth.login(state as LoginRequest);
		  // navigation.navigate(ROUTES.REGISTER);
		  console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  return {onRegisterPress, handleChange, state};
};
