import {View, Text, StyleSheet} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DataWhiteIcon} from '../../assets/icons/icons';
import {months} from 'moment';
LocaleConfig.locales['tr'] = {
  monthNames: [],
  monthNamesShort: [],
  today: 'day',
  dayNames: [],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};
LocaleConfig.defaultLocale = 'tr';
const CalendarBox = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginHorizontal: 10,
        }}>
        <Calendar
          theme={{
            calendarBackground: '#rgba(38, 39, 50, 1)',
            dayTextColor: '#fff',
            arrowColor: '#fff',
            backgroundColor: 'purple',
          }}
          hideArrows={true}
          renderHeader={() => {
            return (
              <View style={styles.headerData}>
                <Text style={styles.textData}>March</Text>
                <DataWhiteIcon />
              </View>
            );
          }}
          // markingType=""
          // markedDates={{
          //   '2022-03-14': {
          //     selected: true,
          //     selectedColor: 'rgba(0, 152, 153, 1)',
          //   },
          //   '2022-03-17': {marked: true},
          //   '2022-03-18': {marked: true, activeOpacity: 0},
          //   '2022-03-19': {disabled: true, disableTouchEvent: true},
          // }}
          markingType="period"
          markedDates={{
            '2022-03-17': {textColor: 'green'},
            '2022-03-18': {startingDay: true, color: 'green'},
            '2022-03-19': {
              selected: true,
              endingDay: true,
              color: 'green',
              textColor: 'gray',
            },
            '2022-03-20': {
              startingDay: true,
              color: 'green',
              endingDay: false,
            },
            '2022-03-22': {
              startingDay: false,
              color: 'green',
              endingDay: true,
            },
          }}
          onDayPress={day => {
            console.log('selected day', day);
          }}
          monthFormat={'dd MM yyyy'}
          onDayLongPress={e => {
            console.log(`e`, e);
          }}
          onMonthChange={e => {
            console.log(`e`, e);
          }}
          onPressArrowLeft={goBack => {
            console.log('aaaaa');
            goBack();
          }}
          enableSwipeMonths
          onPressArrowRight={goFuture => {
            console.log('bbbbb');
            goFuture();
          }}
          firstDay={1}
          style={{}}
        />
      </View>
    </View>
  );
};

export default CalendarBox;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(38, 39, 50, 1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
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
