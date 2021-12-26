import React from 'react';
import {View, Text, SafeAreaView, Platform} from 'react-native';
import {Icon} from '../../assets/icons/icons';
import DefaultButton from '../../components/general/DefaultButton';
import DefaultInput from '../../components/general/DefaultInput';
import HeaderComponent from '../../components/header/Header';
import {styles} from './style';

const Cancelview = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent text={'Отменить'} />
      <View style={styles.cancelContainer}>
        <View style={{marginVertical: Platform.OS === 'ios'? 0 : 80}}>
          <View style={{alignItems: 'center', marginVertical: 0}}>
            <Icon style={styles.icon} />
            <Text style={styles.text}>
              Для отмены заказа, по плану инкасса может осуществляться до 12.00
              дня приезда!
            </Text>
          </View>
          <View style={{marginVertical: Platform.OS === 'android' ? 20 : 40}}>
            <DefaultButton text={'Отмена'} />
          </View>
          <Text style={styles.textFotter}>
            Отмененные посещения сохраняются в истории платежей!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cancelview;
