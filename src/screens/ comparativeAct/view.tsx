import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CheckIcon} from '../../assets/icons/icons';
import DefaultButton from '../../components/general/DefaultButton';
import { ComparativeActHooks } from './hooks';
const {onPress} = ComparativeActHooks();
const comparativeActView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.checkBox}>
        <CheckIcon style={{marginBottom: 30}} />
        <Text style={styles.text}>Заявка отправлена</Text>
      </View>
      <View style={styles.buttonBox}>
        <View style={{marginTop:70,}}>
          <DefaultButton onPress={onPress} text="На главную" />
        </View>
      </View>
    </View>
  );
};

export default comparativeActView;
