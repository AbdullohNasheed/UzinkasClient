import React, {useState} from 'react';

export const DateHook = () => {
  const [date, setDate] = useState('');
  const [markedDays, setMarkedDays] = useState({
    '05-05-2022': {startingDay: true, color: 'green'},
    '05-05-2023': {endingDay: true},
  });
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

  const onDayPress = e => {
    console.log(e);
  };

  return {
    getMinDate,
    getCurrentDate,
    date,
    setDate,
    addZero,
    markedDays,
    onDayPress,
  };
};
