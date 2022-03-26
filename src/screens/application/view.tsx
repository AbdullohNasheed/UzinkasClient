import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  InnIcon,
  LeftIcon,
  MassegeIcon,
  NotIcon,
  PhoneIcon,
  UserIcon,
  UsersIcon,
} from '../../assets/icons/icons';
import DefaultButton from '../../components/general/DefaultButton';
import DefaultImageBackground from '../../components/general/DefaultImageBackground';
import DefaultInput from '../../components/general/DefaultInput';
import BackHeader from '../../components/header/BackHeader';
import {useApplicationScreenHook} from './hooks';
import {styles} from './style';

const Applicationview = () => {
  let {partner, handleChange, onFillPress, onSendPress} =
    useApplicationScreenHook();
  return (
    <DefaultImageBackground>
      <SafeAreaView>
        <BackHeader />
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.text}>Заказ сотрудничества</Text>
          <Text style={styles.textButton}>Название организации</Text>
          <View style={styles.container}>
            <DefaultInput
              icon={NotIcon}
              placeholder={'Kiita Valezka'}
              value={partner?.name_organization}
              onChange={handleChange('name_organization')}
            />
            <Text style={styles.textButton}>С кем можно связаться</Text>
            <DefaultInput
              icon={UsersIcon}
              placeholder={'Raphael Roytman'}
              value={partner.customer_name}
              onChange={handleChange('customer_name')}
            />
            <Text style={styles.textButton}>Номер телефона</Text>
            <DefaultInput
              keyboardType={'phone-pad'}
              icon={PhoneIcon}
              placeholder={'+998 93 555 55 55'}
              value={partner?.phone_number}
              onChange={handleChange('phone_number')}
            />
            <Text style={styles.textButton}>Почта</Text>
            <DefaultInput
              icon={MassegeIcon}
              keyboardType={'email-address'}
              placeholder={'rafaelroytman2@gmail.com'}
              value={partner?.email}
              onChange={handleChange('email')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <DefaultButton onPress={onFillPress} text={'Заполните анкету'} />
            <DefaultButton
              onPress={onSendPress}
              textStyle={{color: '#fff'}}
              style={{backgroundColor: '#009899'}}
              text={'Отправить'}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </DefaultImageBackground>
  );
};

export default Applicationview;
