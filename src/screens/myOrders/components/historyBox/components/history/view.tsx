import {View, Text} from 'react-native';
import React from 'react';
import CalendarBox from '../../../../../../components/header/Calaendar';
import History from '../../../../../../components/header/HistoryView';
import DefaultButton from '../../../../../../components/general/DefaultButton';
import {HistoryOrderHooks} from './hooks';

const HomeView = ({orderHistory, counts}) => {
  console.log({counts});

  return (
    <View>
      <History orderHistory={orderHistory} counts={counts} />
    </View>
  );
};

export default HomeView;
