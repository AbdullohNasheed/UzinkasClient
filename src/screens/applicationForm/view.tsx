import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  BackHandler,
} from 'react-native';
import {
  LeftIcon,
  LocationIcon,
  MassegeIcon,
  MonyIcon,
  NotIcon,
  PhoneIcon,
  UsersIcon,
} from '../../assets/icons/icons';
import DefaultButton from '../../components/general/DefaultButton';
import DefaultImageBackground from '../../components/general/DefaultImageBackground';
import DefaultInput from '../../components/general/DefaultInput';
import BackHeader from '../../components/header/BackHeader';
import { useContractScreenData } from './hooks';
import {styles} from './style';

const {send, handleChange, onSavePress} = useContractScreenData();

const ApplicationFormview = () => {
  return (
    <DefaultImageBackground>
      <SafeAreaView>
        <BackHeader />
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.text}>Анкета</Text>
          <Text style={styles.textButton}>Именование объекта</Text>
          <View style={styles.container}>
            <DefaultInput
              icon={NotIcon}
              placeholder={'Kiita Valezka'}
              value={send?.name_object}
              onChange={handleChange('name_object')}
            />
            <Text style={styles.textButton}>Местоположение</Text>
            <DefaultInput
              icon={LocationIcon}
              placeholder={'Raphael Roytman'}
              value={send?.location}
              onChange={handleChange('location')}
            />
            <Text style={styles.textButton}>Сумма денежных поступлений</Text>
            <DefaultInput
              icon={MonyIcon}
              placeholder={'money'}
              keyboardType={'decimal-pad'}
              value={send?.amount_money}
              onChange={handleChange('amount_money')}
            />
            <Text style={styles.textButton}>План работы</Text>
            <DefaultInput
              icon={NotIcon}
              placeholder={'План работы'}
              value={send?.work_plan}
              onChange={handleChange('work_plan')}
            />
            <Text style={styles.textButton}>План посещения инкасс</Text>
            <DefaultInput
              icon={NotIcon}
              placeholder={'rafaelroytman2@gmail.com'}
              value={send?.plan_visit_inkass}
              keyboardType={'email-address'}
              onChange={handleChange('plan_visit_inkass')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <DefaultButton onPress={onSavePress} text={'Сохранить'} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </DefaultImageBackground>
  );
};

export default ApplicationFormview;
