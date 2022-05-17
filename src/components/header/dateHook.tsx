import React, {useState} from 'react';

export const DateHook = () => {
  const [date, setDate] = useState('');
  const addZero = a => {
    if (a < 10 && a > 0) {
      return '0' + a.toString();
    } else {
      return a;
    }
  };
  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return year + '-' + addZero(month) + '-' + addZero(date);
  };
  const getMinDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return year + '-' + addZero(month) + '-' + addZero(date);
  };
  return {getMinDate, getCurrentDate, date, setDate, addZero};
};
