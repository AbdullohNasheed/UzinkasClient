import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {Snackbar} from 'react-native-paper';
import {
  CircleIcon,
  ClockIcon,
  GoldIcon,
  KalendarMiniIcon,
  MishokIcon,
  MonyIcon,
} from '../../assets/icons/icons';
import DefaultButton from '../../components/general/DefaultButton';
import InputBlack from '../../components/general/InputBlack';
import HeaderComponent from '../../components/header/Header';
import {useQrKodScreenHook} from './hooks';
import {styles} from './style';
const Additionalview = () => {
  const {onQrKodPress, handleChange, state, error, removeError, link} =
    useQrKodScreenHook();
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent hasMenu={false} hasMenuOne={false} text={'Доп.визит'} />
      <View style={styles.errorBox}>
        <Snackbar
          style={{
            backgroundColor: 'red',
            height: '100%',
            width: '100%',
            borderRadius: 10,
            alignSelf: 'center',
            justifyContent: 'center',
          }}
          onDismiss={removeError}
          visible={!!error}>
          {error}
        </Snackbar>
      </View>
      <ScrollView style={styles.additionalContainer}>
        <View style={{marginBottom: 120}}>
          <View style={styles.errorBox}></View>
          <View style={{marginVertical: 40}}>
            <Text style={styles.text}>Дата</Text>
            <InputBlack
              value={state.date}
              onChange={handleChange('date')}
              icon={KalendarMiniIcon}
              placeholder="Дата"
            />
            <Text style={styles.text}>Время</Text>
            <InputBlack
              icon={ClockIcon}
              value={state.time}
              onChange={handleChange('time')}
              placeholder={'Часы'}
            />
            <Text style={styles.text}>Сумма</Text>
            <InputBlack
              value={state.amount}
              onChange={handleChange('amount')}
              icon={MonyIcon}
              placeholder={'Сумма'}
            />
            <Text style={styles.text}>Номер мешков</Text>
            <InputBlack
              value={state.bag}
              onChange={handleChange('bag')}
              icon={MishokIcon}
              placeholder={'Код'}
            />
            {/* <View style={styles.textBox}>
              <Text style={styles.textOne}>Стоимость доп.визита</Text>
              <Text style={styles.textTwo}>1.000.000</Text>
            </View> */}
          </View>
          <DefaultButton onPress={link} text={'Генерация QR-кода'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Additionalview;
