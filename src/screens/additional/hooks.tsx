import {useNavigation} from '@react-navigation/core';
import {useState} from 'react';
import {requests} from '../../api/requests';
import {OrderRequest} from '../../api/types';
import {ROUTES} from '../../navigation/ROUTES';
import {Snackbar} from 'react-native-paper';

export const useQrKodScreenHook = () => {
  const [state, setState] = useState<OrderRequest>({
    date: '',
    amount: '',
    bag: '',
    time: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
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
      const res = await requests.order.createAdditional(state);

      if (res.data.success) {
        setSuccess('Заказ успешно выполнен');
        console.log(res.data);

        navigation.navigate(ROUTES.QRCODEONE, res.data);
      } else {
        setError(res.data.message || res.data.error);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError('Что-то пошло не так. Пожалуйста, повторите попытку позже');
    }
    // navigation.navigate(ROUTES.QRKOD);
  };
  let onQrKodPress = async () => {
    try {
      let res = await requests.order.createOrder(state);
      if (res.data.success) {
        navigation.navigate(ROUTES.QRKOD, res.data);
      } else {
        console.log(res.data);
        setError(res.data.message);
      }
    } catch (error) {
      console.log(error.response);

      setError('Что-то пошло не так');
    }
  };

  const removeError = () => {
    setError('');
  };

  return {onQrKodPress, state, handleChange, error, removeError, link};
};
