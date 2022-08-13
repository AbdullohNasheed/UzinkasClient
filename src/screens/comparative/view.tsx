import {View, Text, TextInput, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './style';
import HeaderComponent from '../../components/header/Header';
import DefaultButton from '../../components/general/DefaultButton';
import {ComparativeOneHooks} from './hooks';
import {SmsIcon} from '../../assets/icons/icons';
import CalendarOne from '../../components/calendar/CalendarOne';

const ComparativeView = () => {
  const {onPress} = ComparativeOneHooks();
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <HeaderComponent
          hasMenuOne={false}
          hasMenu={true}
          text="Сравнительный акт"
        />
        <ScrollView>
          <View style={{paddingTop: 20, paddingBottom: 110}}>
            <View style={{marginHorizontal: 20}}>
              <View
                style={{
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 8.35,

                  elevation: 19,
                  backgroundColor: '#2b2c36',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  borderRadius: 10,
                }}></View>
              <CalendarOne />
            </View>
            <View style={styles.inputBox}>
              <SmsIcon />
              <TextInput
                style={{marginHorizontal: 10}}
                placeholderTextColor="#3E3E3E"
                placeholder="mail.com">
                <Text
                  style={{
                    fontSize: 14,
                    color: '#fff',
                    fontWeight: 'bold',
                  }}></Text>
              </TextInput>
            </View>
            <DefaultButton onPress={onPress} text={'Заказать'} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ComparativeView;
