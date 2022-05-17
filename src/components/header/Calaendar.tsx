import {View, Text, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';
import React from 'react';
import {DateHook} from './dateHook';
const CalendarBox = () => {
  const {getCurrentDate, getMinDate, setDate, date} = DateHook();
  return (
    <View style={styles.container}>
      <Calendar
        current={getCurrentDate().toString()}
        minDate={getMinDate().toString()}
        maxDate={`2050-01-01`}
        monthFormat={`MMMM yyyy`}
        onDayLongPress={day => {
          setDate(day.dateString);
        }}
        hideArrows={false}
        hideExtraDays={true}
        disableMonthChange={false}
        firstDay={1}
        theme={{
          calendarBackground: '#2b2c36',
          todayTextColor: '#fff',
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
