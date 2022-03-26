import {View, Text, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {styles} from './style';
import {DataWhiteIcon} from '../../../../assets/icons/icons';
import DefaultButton from '../../../../components/general/DefaultButton';
import { ComparativeHooks } from './hooks';
const {onPress} = ComparativeHooks();
 let phone = +998998595937;
const HistoryViewOne = () => {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.button}>
        <View style={styles.buttonBox}>
          <Text style={styles.text}>Выбрать дату</Text>
          <DataWhiteIcon />
        </View>
      </TouchableOpacity> */}
      <View style={styles.buttonContainer}>
        <DefaultButton onPress={onPress} text={'Заказать сравнительный акт'} />
        <DefaultButton
          onPress={() => {
            Linking.openURL(`tel:${phone}`);
          }}
          text={'Позвонить инкассатору'}
        />
      </View>
    </View>
  );
};

export default HistoryViewOne;
