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
    time:'',
  });
  const [error, setError] = useState('');
  let handleChange = (key: keyof OrderRequest) => (value: string) => {
    console.log({key, value});

    setState({...state, [key]: value});
  };
  let navigation = useNavigation();
  // let order = useSelector(selectOrder);
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

  return {onQrKodPress, state, handleChange, error, removeError};
};
