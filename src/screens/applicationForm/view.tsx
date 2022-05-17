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
import BoxTimeJob from './components/boxOne';
import BoxTimeActiveJob from './components/boxOne';
import BoxTimeJobOne from './components/boxTwo';
import {useContractScreenData} from './hooks';
import {styles} from './style';

const ApplicationFormview = () => {
  const {send, handleChange, onSavePress} = useContractScreenData();
  return (
    <DefaultImageBackground>
      <SafeAreaView>
        <BackHeader />
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.text}>Анкета</Text>
          <View style={styles.container}>
            <Text style={styles.textButton}>Именование объекта</Text>
            <DefaultInput
              icon={LocationIcon}
              placeholder={'Raphael Roytman'}
              value={send?.location}
              onChange={handleChange('location')}
            />
            <Text style={styles.textButton}>Местоположение</Text>
            <DefaultInput
              icon={UsersIcon}
              placeholder={'rafaelroytman2@gmail.com'}
              value={send?.plan_visit_inkass}
              keyboardType={'email-address'}
              onChange={handleChange('plan_visit_inkass')}
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
            <BoxTimeJob text="Понедельник" />
            <BoxTimeJob text="Вторник" />
            <BoxTimeJob text="Среда" />
            <BoxTimeJob text="Четверг" />
            <BoxTimeJob text="Пятница" />
            <BoxTimeJob text="Суббота" />
            <BoxTimeJob text="Воскресенье" />
            <View style={{marginHorizontal: 20, marginTop: 25}}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#009899'}}>
                План посещения инкасс
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#009899',
                  fontWeight: '300',
                  marginVertical: 10,
                  marginBottom: 15,
                }}>
                План посещений осуществляется через день
              </Text>
            </View>
            <BoxTimeJobOne text="Понедельник" />
            <BoxTimeJobOne text="Вторник" />
            <BoxTimeJobOne text="Среда" />
            <BoxTimeJobOne text="Четверг" />
            <BoxTimeJobOne text="Пятница" />
            <BoxTimeJobOne text="Суббота" />
            <BoxTimeJobOne text="Воскресенье" />
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

{
  /* <DefaultInput
              icon={NotIcon}
              placeholder={'План работы'}
              value={send?.work_plan}
              onChange={handleChange('work_plan')}
            /> */
}
