import React, {useEffect, useState} from 'react';
import {requests} from '../../api/requests';

export const useActiveData = () => {
  const [order, setOrder] = useState([]);
  const [loading, setLoading]= useState(false);
  const effect = async () => {
    try {
      setLoading(true);
      let res = await requests.getHistory.getActive();
      setOrder(res.data);
      setLoading(false)
      console.log(res.data);
    } catch (error) {
      console.log(error.response);
      // setLoading(false)
    }
  };
  useEffect(() => {
    effect();
  }, []);
  return {order, loading};
};
export const useHistoryData = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [loadingOne, setLoading] = useState(false);
  const effect = async () => {
    try {
      setLoading(true)
      let res = await requests.getHistory.getHistory();
      setOrderHistory(res.data);
      setLoading(false)
      console.log(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    effect();
  }, []);
  return {orderHistory, loadingOne};
};
