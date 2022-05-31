import {View, Text, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';
import React from 'react';
import {DateHook} from './dateHook';
const CalendarBox = () => {
  const {getCurrentDate, getMinDate, setDate, date, markedDays, onDayPress} =
    DateHook();
  return (
    <View style={styles.container}>
      <Calendar
        current={'2022-05-05'}
        minDate={'1997-05-05'}
        maxDate={`2050-05-05`}
        monthFormat={`dd-MM-yyyy`}
        onDayLongPress={day => {
          console.log(day);
        }}
        renderHeader={date => {
          console.log({date});
        }}
        hideArrows={false}
        hideExtraDays={true}
        disableMonthChange={false}
        firstDay={1}
        theme={{
          calendarBackground: '#2b2c36',
          todayTextColor: '#fff',
        }}
        markingType="period"
        markedDates={markedDays}
        onDayPress={onDayPress}
        onPress={e => {
          console.log(e);
          console.log('pressed');
        }}
        onLongPress={e => {
          console.log(e);
        }}
      />
    </View>
  );
};

export default CalendarBox;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#2b2c36',
  },
  dataContainer: {
    // height: '50%',
  },
  dataBox: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
  },
  headerData: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  textData: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
