import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import dayjs from 'dayjs';
import {useState} from 'react';
import {Snackbar} from 'react-native-paper';
import {requests} from '../../api/requests';
import {OrderRequest} from '../../api/types';
import {ROUTES} from '../../navigation/ROUTES';

export const useQrKodScreenOneHook = () => {
  const [state, setState] = useState<OrderRequest>({
    date: dayjs().format('DD-MM-YYYY'),
    amount: '',
    bag: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  let handleChange = (key: keyof OrderRequest) => (value: string) => {
    console.log({key, value});

    setState({...state, [key]: value});
  };
  let navigation = useNavigation();

  const link = async () => {
    let valid = Object.keys(state).every(
      el => !!state[el as keyof OrderRequest],
    );
    if (!valid) {
      setError('Пожалуйста заполните все поля');
      return;
    }
    setLoading(true);
    try {
      const res = await requests.order.createOrder(state);

      if (res.data.success) {
        setSuccess('Заказ успешно выполнен');
        console.log(res.data);

        await AsyncStorage.setItem('QRCODE', res.data.order?.hash);
        navigation.navigate(ROUTES.QRCODEONE, res.data);
      } else {
        setError(res.data.message || res.data.error);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError('Что-то пошло не так. Пожалуйста, повторите попытку позже');
    }
  };

  const removeError = () => {
    // setError('');
  };

  return {
    state,
    handleChange,
    error,
    removeError,
    link,
    success,
    loading,
  };
};
