import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import CalendarBox from '../../components/header/Calaendar';
import HeaderComponent from '../../components/header/Header';
import DefaultButton from '../../components/general/DefaultButton';
import {ComparativeHooks} from '../myOrders/components/historyBox/hooks';
import {ComparativeOneHooks} from './hooks';
const {onPress} = ComparativeOneHooks();
const ComparativeView = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HeaderComponent text="Сравнительный акт" />
        <View style={{marginVertical: 40}}>
          <CalendarBox />
        </View>
        <DefaultButton onPress={onPress} text={'Заказать'} />
      </SafeAreaView>
    </View>
  );
};

export default ComparativeView;
