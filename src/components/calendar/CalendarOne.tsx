import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import {style} from '../../screens/OrderForAnaAdditionalVisit/styles';
import {styles} from '../../screens/choosing/style';
import {ArrowLeftIcon, ArroWRightIcon} from '../../assets/icons/icons';

const CalendarOne = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  console.log('selectedStartDate', selectedStartDate);
  console.log('selectedEndDate', selectedEndDate);

  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };
  return (
    <CalendarPicker
      startFromMonday={true}
      allowRangeSelection={true}
      minDate={new Date(2022, 1, 1)}
      maxDate={new Date(2050, 6, 3)}
      weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
      months={[
        'January',
        'Febraury',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]}
      previousTitle={
        <View style={{}}>
          <ArrowLeftIcon />
        </View>
      }
      nextTitle={
        <View>
          <ArroWRightIcon />
        </View>
      }
      todayBackgroundColor="#42434c"
      selectedDayColor="#009899"
      selectedDayTextColor="#000000"
      scaleFactor={375}
      textStyle={{
        // fontFamily: 'Cochin',
        color: '#fff',
      }}
      onDateChange={onDateChange}
    />
  );
};

export default CalendarOne;
const stlyes = StyleSheet.create({
  left: {
    left: 100,
  },
});
