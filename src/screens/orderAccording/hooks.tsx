import {useNavigation} from '@react-navigation/core';
import {useState} from 'react';
import {Snackbar} from 'react-native-paper';
import {requests} from '../../api/requests';
import {OrderRequest} from '../../api/types';
import {ROUTES} from '../../navigation/ROUTES';

export const useQrKodScreenOneHook = () => {
  const [state, setState] = useState<OrderRequest>({
    date: '',
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
        navigation.navigate(ROUTES.QRCODEONE, res.data);
      } else {
        setError(res.data.message);
      }
      setLoading(false);
    } catch (error) {
      setError('Что-то пошло не так. Пожалуйста, повторите попытку позже');
    }
  };
  // let order = useSelector(selectOrder);
  let onQrKodOnePress = async () => {
    try {
      let res = await requests.order.createOrder(state);
      if (res.data.success) {
        navigation.navigate(ROUTES.QRCODEONE, res.data);
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

  return {
    onQrKodOnePress,
    state,
    handleChange,
    error,
    removeError,
    link,
    success,
    loading,
  };
};
