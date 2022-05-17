import {useNavigation} from '@react-navigation/core';
import {useState} from 'react';
import {requests} from '../../api/requests';
import {OrderRequest} from '../../api/types';
import {ROUTES} from '../../navigation/ROUTES';

export const useQrKodScreenOneHook = () => {
  const [state, setState] = useState<OrderRequest>({
    date: '',
    amount: '',
    bag: '',
    time: '',
  });
  const [error, setError] = useState('');
  let handleChange = (key: keyof OrderRequest) => (value: string) => {
    console.log({key, value});

    setState({...state, [key]: value});
  };
  let navigation = useNavigation();
  const link = () => {
    navigation.navigate(ROUTES.QRCODEONE);
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

  return {onQrKodOnePress, state, handleChange, error, removeError, link};
};
