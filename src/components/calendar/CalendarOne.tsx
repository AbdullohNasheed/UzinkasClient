import {View, Text} from 'react-native';
import React from 'react';
import {Calendar} from 'react-native-calendario';
const CalendarOne = () => {
  return (
    <View>
      <Calendar
        // onChange={range => console.log(range)}
        // minDate={new Date(2022, 8, 5)}
        startDate={new Date(2022, 8, 21)}
        endDate={new Date(2022, 8, 22)}
        theme={{
          activeDayColor: {},
          monthTitleTextStyle: {
            color: '#fff',
            fontWeight: '300',
            fontSize: 16,
          },
          emptyMonthContainerStyle: {},
          emptyMonthTextStyle: {
            fontWeight: '200',
          },
          weekColumnsContainerStyle: {},
          weekColumnStyle: {
            paddingVertical: 10,
            borderRadius: 40,
          },
          weekColumnTextStyle: {
            color: '#b1c',
            fontSize: 13,
          },
          nonTouchableDayContainerStyle: {},
          nonTouchableDayTextStyle: {},
          startDateContainerStyle: {},
          endDateContainerStyle: {},
          dayContainerStyle: {
            backgroundColor: ' red',
          },
          dayTextStyle: {
            color: '#fff',
            fontWeight: '400',
            fontSize: 16,
          },
          dayOutOfRangeContainerStyle: {
            backgroundColor: 'yellow',
          },
          dayOutOfRangeTextStyle: {},
          todayContainerStyle: {},
          todayTextStyle: {
            color: '#6d95da',
          },
          activeDayContainerStyle: {
            backgroundColor: '#fff',
            borderWidth: 1,
          },
          activeDayTextStyle: {
            color: '#F2F2F2',
          },
          nonTouchableLastMonthDayTextStyle: {
            color: 'red',
            backgroundColor: ' red',
          },
        }}
      />
    </View>
  );
};

export default CalendarOne;
