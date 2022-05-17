import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CheckIcon} from '../../assets/icons/icons';
import DefaultButton from '../../components/general/DefaultButton';
import {ComparativeActOneHooks} from './hooks';
import HeaderComponent from '../../components/header/Header';
const comparativeActOneView = () => {
  const {onMyOrderPress} = ComparativeActOneHooks();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HeaderComponent
          hasMenuOne={false}
          hasMenu={true}
          text="Список заказов"
        />
      </SafeAreaView>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            height: '70%',
          }}>
          <View
            style={{
              height: '90%',
              justifyContent: 'space-between',
            }}>
            <View style={styles.checkBox}>
              <CheckIcon style={{marginBottom: 30}} />
              <Text style={styles.text}>Заказ подтвержден</Text>
            </View>
            <View style={styles.buttonBox}>
              <View style={{}}>
                <DefaultButton onPress={onMyOrderPress} text="Мои заказы" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default comparativeActOneView;
