import React, {useState} from 'react';
import {View, Text, SafeAreaView, useWindowDimensions} from 'react-native';
import {
  CircleIcon,
  KalendarIcon,
  KalendarMiniIcon,
  MonyIcon,
} from '../../assets/icons/icons';
import DefaultButton from '../../components/general/DefaultButton';
import DefaultInput from '../../components/general/DefaultInput';
import InputBlack from '../../components/general/InputBlack';
import HeaderComponent from '../../components/header/Header';
import {useQrKodScreenOneHook} from './hooks';
import {styles} from './style';
import {Snackbar} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

const OrderAccordingView = () => {
  const {
    error,
    handleChange,
    link,
    onQrKodOnePress,
    removeError,
    state,
    success,
    loading,
  } = useQrKodScreenOneHook();
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent hasMenu hasMenuOne={false} text={'Заказать по плану'} />
      <View style={styles.errorBox}>
        <Snackbar
          style={success ? styles.success : styles.danger}
          onDismiss={removeError}
          visible={!!error || !!success}>
          {error}
        </Snackbar>
      </View>
      <ScrollView style={styles.orderAccording}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Дата</Text>
          <InputBlack
            value={state.date}
            onChange={handleChange('date')}
            icon={KalendarMiniIcon}
            placeholder="01-01-1997"
            keyboardType="number-pad"
            mask={[/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
          />
          <Text style={styles.text}>Сумма денег, подлежающая перечислению</Text>
          <InputBlack
            value={state.amount}
            onChange={handleChange('amount')}
            icon={MonyIcon}
            placeholder={'Сумма'}
            keyboardType="number-pad"
          />
          <Text style={styles.text}>Код ракамлари</Text>
          <InputBlack
            value={state.bag}
            onChange={handleChange('bag')}
            icon={CircleIcon}
            placeholder={'Код'}
            keyboardType="number-pad"
          />
          <View style={styles.bottonBox}>
            <DefaultButton
              loading={loading}
              onPress={link}
              text={'Генерация QR-кода'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderAccordingView;
