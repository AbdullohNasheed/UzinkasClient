import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {requests} from '../../api/requests';
import {LoginRequest} from '../../api/types';
import {ROUTES} from '../../navigation/ROUTES';
import {userLoggedIn} from '../../store/slices/userSlice';

export const useLoginScreenHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState('')
  const [error,setError]= useState<any>();
  const [state, setState] = useState<LoginRequest>({
    inn: '',
    location: '',
    number: '',
  });
  const onDataChange = (e:string)=>{
    if(error){
      setError({});
    }
    setDate(e);
  }
  let handleChange = (key: keyof LoginRequest) => (value: string) => {
    console.log({key, value});

    setState({...state, [key]: value});
  };
  let onRegisterPress = async () => {
    try {
      setLoading(true);
      let res = await requests.auth.login(state as LoginRequest);
      dispatch(userLoggedIn(res.data));
      console.log(res.data);
    } catch (error) {
     setError({
       message:
         error?.response?.data?.errorMessage || 'Пожалуйста заполните поля',
     });
    } finally {
      setLoading(false);
    }
  };
  return {onRegisterPress, handleChange, loading, state, date,setDate,onDataChange, error};
};
