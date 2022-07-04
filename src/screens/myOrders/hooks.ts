import React, {useEffect, useState} from 'react';
import {requests} from '../../api/requests';

export const useActiveData = () => {
  const [order, setOrder] = useState([]);
  const [counts, setCounts] = useState({tariff: 0, total: 0, totalAll: 0});
  const [loading, setLoading] = useState(false);
  const effect = async () => {
    try {
      setLoading(true);
      let res = await requests.getHistory.getActive();
      setOrder(res.data.orders || []);
      setLoading(false);
      console.log(res.data.orders || []);
      setCounts({
        tariff: res.data.tarif,
        total: res.data.total,
        totalAll: res.data.totalAll,
      });
    } catch (error) {
      console.log(error.response);
      // setLoading(false)
    }
  };
  useEffect(() => {
    effect();
  }, []);
  return {order, loading, counts};
};
export const useHistoryData = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [loadingOne, setLoading] = useState(false);
  const [counts, setCounts] = useState({tariff: 0, total: 0, totalAll: 0});

  const effect = async () => {
    try {
      setLoading(true);
      let res = await requests.getHistory.getHistory();
      setOrderHistory(res.data.orders.data);
      console.log(res.data);

      setLoading(false);
      setCounts({
        tariff: res.data.tarif,
        total: res.data.total,
        totalAll: res.data.totalAll,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };
  useEffect(() => {
    effect();
  }, []);
  return {orderHistory, loadingOne, counts};
};
